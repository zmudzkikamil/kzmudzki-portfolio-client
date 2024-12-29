import { classNames } from "@/utils/classNames";
import React from "react";

export interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  className?: string;
  testId?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
  className,
  testId,
}) => {
  const buttonStyle = classNames({
    "py-3 px-14 lg:px-16 rounded-full bg-cta hover:bg-white min-w-max text:xl lg:text-2xl leading-none text-black font-bold":
      true,
    "bg-grey text-white": disabled,
    [className as string]: !!className,
  });
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonStyle}
      data-testid={testId || "button"}
    >
      {label}
    </button>
  );
};

export default Button;
