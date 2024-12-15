import { Variant } from "@/shared/types/Variant";
import { classNames } from "@/utils/classNames";

interface Props {
  mode: Exclude<Variant, "grey">;
  children: React.ReactNode;
}

export const ViewLayout: React.FC<Props> = ({ mode, children }) => {
  const viewStyle = classNames({
    container: true,
    "bg-primary": mode === "primary",
    "bg-secondary": mode === "secondary",
  });
  return <div className={viewStyle}>{children}</div>;
};
