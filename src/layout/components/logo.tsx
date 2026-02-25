import { Link } from "react-router";

interface Props {}

export const Logo: React.FC<Props> = () => {
  return (
    <Link
      to="/"
      className="flex flex-col justify-center text-secondary h-full px-4"
    >
      <span className="flex items-baseline text-[2.625rem] font-zendots leading-none">
        ZK
        <span className="text-secondary/40 tracking-tighter text-[2.25rem]">
          amil
        </span>
      </span>
      <span className="text-xs tracking-[0.5em] text-secondary/60">
        DEVELOPMENT
      </span>
    </Link>
  );
};
