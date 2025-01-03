import { classNames } from "@/utils/classNames";
import { Variant } from "../../types/Variant";

export interface BadgeProps {
  label: string;
  variant: Exclude<Variant, "cta">;
}

export const Badge: React.FC<BadgeProps> = ({ label, variant }) => {
  const getColor = (variant: Exclude<Variant, "cta">) => {
    switch (variant) {
      case "grey":
        return "text-white bg-grey";
      case "primary":
        return "text-white bg-primary";
      case "secondary":
        return "text-primary bg-secondary";
      default:
        throw new Error("Invalid badge variant");
    }
  };

  const badgeStyle = classNames({
    "px-4 py-2 rounded font-extrabold text-sm sm:text-base leading-none tracking-wider text-center min-w-min":
      true,
    [getColor(variant)]: true,
  });
  return (
    <div className={badgeStyle} data-testid="badge">
      <span data-testid="badge-label">{label}</span>
    </div>
  );
};
