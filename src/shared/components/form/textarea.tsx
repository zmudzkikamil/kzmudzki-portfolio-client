import { classNames } from "@/utils/classNames";
import React from "react";
import { inputBase } from "./styles";

interface Props extends React.ComponentPropsWithoutRef<"textarea"> {
  label: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, id, className, ...props }, ref) => (
    <div>
      <label
        htmlFor={id}
        className="block mb-1 text-base text-secondary font-semibold"
      >
        {label}
      </label>
      <textarea
        id={id}
        ref={ref}
        className={classNames({
          [inputBase]: true,
          "resize-none": true,
          "border-red-400": !!error,
          [className as string]: !!className,
        })}
        {...props}
      />
      {error && (
        <p className="text-sm font-bold text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  ),
);

Textarea.displayName = "Textarea";
