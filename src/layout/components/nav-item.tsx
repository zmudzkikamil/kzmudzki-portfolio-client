import { NavLink } from "react-router";

interface Props {
  label: string;
  href: string;
}
export const NavItem: React.FC<Props> = ({ label, href }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${isActive ? "text-white after:w-full" : "text-grey-light"} relative hover:text-white px-3 py-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.5px] after:w-0 after:bg-grey after:transition-all after:duration-300 hover:after:w-full`
      }
    >
      {label}
    </NavLink>
  );
};
