import { paths } from "@/config/paths";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";

interface Props {}

export const Navigation: React.FC<Props> = () => {
  return (
    <nav className="flex items-center justify-between h-20 w-full bg-primary">
      <Logo />
      <div className="flex gap-8 text-lg pr-6">
        <NavItem href={paths["about-me"].path} label="About me" />
        <NavItem href={paths["digital-cv"].path} label="Digital CV" />
        <NavItem href={paths.portfolio.path} label="Portfolio" />
        <NavItem href={paths.contact.path} label="Contact" />
      </div>
    </nav>
  );
};
