import { Variant } from "@/shared/types/Variant";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { classNames } from "@/utils/classNames";
import { paths } from "@/config/paths";

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  const containerStyle = classNames({
    "relative overflow-x-clip overflow-y-visible min-h-screen": true,
    "bg-primary": !(
      pathname === paths["about-me"].path ||
      pathname === paths["digital-cv"].path
    ),
    "bg-secondary":
      pathname === paths["about-me"].path ||
      pathname === paths["digital-cv"].path,
  });
  return (
    <div className={containerStyle}>
      <Navigation></Navigation>
      <Outlet />
      <Footer></Footer>
      <ScrollRestoration />
    </div>
  );
};
