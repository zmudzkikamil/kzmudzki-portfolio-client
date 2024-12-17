import { Link } from "react-router";

interface Props {}

export const Logo: React.FC<Props> = () => {
  return (
    <Link
      to="/"
      className="flex items-center text-secondary h-full px-4 font-zendots text-[2.625rem]"
    >
      ZK.dev
    </Link>
  );
};
