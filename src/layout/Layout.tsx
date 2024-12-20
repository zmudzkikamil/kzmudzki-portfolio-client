import { Variant } from "@/shared/types/Variant";
import { Outlet } from "react-router";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";

export const Layout: React.FC = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};
