import { ButtonSize } from "@/shared/types/ButtonSize";
import { Variant } from "@/shared/types/Variant";
import { classNames } from "@/utils/classNames";
import { useNavigate } from "react-router";

interface Props {
  variant: Exclude<Variant, "grey">;
  size?: ButtonSize;
  icon: string;
  url: string;
  testId?: string;
  className?: string;
}

export const LinkBbutton: React.FC<Props> = ({
  variant,
  icon,
  url,
  testId,
  size = "default",
  className,
}) => {
  const navigate = useNavigate();

  const buttonSize: Record<ButtonSize, string> = {
    small: "text-2xl leading-none size-6",
    default: "text-5xl lg:text-6xl leading-none size-10 lg:size-12",
    large: "text-[64px] leading-none size-16",
  };
  const buttonStyle = classNames({
    "flex items-center justify-center text-5": true,
    "text-cta hover:text-white": variant === "cta",
    "text-primary hover:text-primary-light": variant === "primary",
    "text-secondary hover:text-white": variant === "secondary",
    [buttonSize[size]]: !!size,
    [className as string]: !!className,
  });
  return (
    <a href={url} className={buttonStyle} data-testid={testId || "link-button"}>
      <i className={`${icon} `}></i>
    </a>
  );
};
