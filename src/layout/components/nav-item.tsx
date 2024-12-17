import { Link } from "react-router";

interface Props {
  label: string;
  href: string;
}
export const NavItem: React.FC<Props> = ({ label, href }) => {
  return (
    <Link
      to={href}
      className="relative text-grey-light hover:text-white px-3 py-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
    >
      {label}
    </Link>
  );
};
