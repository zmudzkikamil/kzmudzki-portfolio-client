import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { paths } from "@/config/paths";
import { Layout } from "@/layout/layout";

const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: paths["about-me"].path,
          index: true,
          lazy: () =>
            import("../views/about-me/about-me").then(convert(queryClient)),
        },
        {
          path: paths["digital-cv"].path,
          lazy: () =>
            import("../views/digital-cv/digital-cv").then(convert(queryClient)),
        },
        {
          path: paths.portfolio.path,
          lazy: () =>
            import("../views/portfolio/portfolio").then(convert(queryClient)),
        },
        {
          path: paths.project.path,
          lazy: () =>
            import("../views/portfolio/project").then(convert(queryClient)),
        },
        {
          path: paths.contact.path,
          lazy: () =>
            import("../views/contact/contact").then(convert(queryClient)),
        },
      ],
    },
    {
      path: "*",
      lazy: () => import("./not-found").then(convert(queryClient)),
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
