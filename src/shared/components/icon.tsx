import { classNames } from "@/utils/classNames";
import { Variant } from "../types/Variant";

interface Props {
  iconClassName?: string;
  variant: Exclude<Variant, "grey" | "cta">;
  size?: "default" | "large";
}

export const Icon: React.FC<Props> = ({
  iconClassName,
  variant,
  size = "default",
}) => {
  const iconSize = {
    default: "size-20 text-[2.625rem] leading-none",
    large: "size-24 text-[3rem] leading-none",
  };
  const iconStyle = classNames({
    "flex shrink-0 items-center justify-center rounded-full m-2": true,
    "bg-primary text-secondary": variant === "primary",
    "bg-secondary text-primary": variant === "secondary",
    [iconSize[size]]: !!iconSize,
  });

  return (
    <div className={iconStyle}>
      <i className={`${iconClassName} flex items-center justify-center`}></i>
    </div>
  );
};
