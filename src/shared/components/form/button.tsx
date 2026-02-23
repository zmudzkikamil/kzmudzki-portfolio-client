import { Spinner } from "@/shared/components/spinner";
import { classNames } from "@/utils/classNames";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  label: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  testId?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  label,
  loading = false,
  disabled = false,
  className,
  testId,
}) => {
  const isDisabled = disabled || loading;
  const buttonStyle = twMerge(
    classNames({
      "inline-flex items-center justify-center gap-2 py-3 px-14 lg:px-16 rounded-full bg-cta min-w-max text:xl lg:text-2xl leading-none text-black font-bold transition-colors":
        true,
      "hover:bg-white": !isDisabled,
      "bg-grey text-white cursor-not-allowed": isDisabled,
    }),
    className,
  );
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={buttonStyle}
      data-testid={testId || "button"}
    >
      {loading && <Spinner size="sm" variant="primary" />}
      {label}
    </button>
  );
};

export default Button;
