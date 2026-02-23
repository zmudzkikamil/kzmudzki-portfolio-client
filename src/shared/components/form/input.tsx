import { classNames } from "@/utils/classNames";
import React from "react";
import { inputBase } from "./styles";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, id, className, ...props }, ref) => (
    <div>
      <label
        htmlFor={id}
        className="block mb-1 text-base text-secondary font-semibold"
      >
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        className={classNames({
          [inputBase]: true,
          "border-red-400": !!error,
          [className as string]: !!className,
        })}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  ),
);

Input.displayName = "Input";
