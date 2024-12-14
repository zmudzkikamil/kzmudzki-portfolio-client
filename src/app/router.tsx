import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Badge } from "@/shared/components/Badge";
import { paths } from "@/config/paths";

const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};
Badge;
export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths["about-me"].path,
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
      lazy: () => import("../views/contact/contact").then(convert(queryClient)),
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
