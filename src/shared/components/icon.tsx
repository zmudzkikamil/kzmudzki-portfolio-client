import { classNames } from "@/utils/classNames";
import { Variant } from "../types/Variant";

interface Props {
  iconClassName?: string;
  variant: Exclude<Variant, "grey" | "cta">;
}

export const Icon: React.FC<Props> = ({ iconClassName, variant }) => {
  const iconStyle = classNames({
    "flex shrink-0 items-center justify-center w-20 h-20 rounded-full m-2":
      true,
    "bg-primary text-secondary": variant === "primary",
    "bg-secondary text-primary": variant === "secondary",
  });

  return (
    <div className={iconStyle}>
      <i
        className={`${iconClassName} flex items-center justify-center text-[2.625rem] leading-none`}
      ></i>
    </div>
  );
};
