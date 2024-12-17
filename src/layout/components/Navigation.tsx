import { Logo } from "./logo";
import { NavItem } from "./nav-item";

interface Props {}

export const Navigation: React.FC<Props> = () => {
  return (
    <nav className="flex items-center justify-between h-20 w-full bg-primary">
      <Logo />
      <div className="flex gap-8 text-lg pr-6">
        <NavItem href="/" label="About me" />
        <NavItem href="/cv" label="Digital CV" />
        <NavItem href="/portfolio" label="Portfolio" />
        <NavItem href="/contact" label="Contact" />
      </div>
    </nav>
  );
};
