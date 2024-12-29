import { Variant } from "@/shared/types/Variant";
import { classNames } from "@/utils/classNames";

interface Props {
  mode: Exclude<Variant, "grey" | "cta">;
  children: React.ReactNode;
}

export const ViewLayout: React.FC<Props> = ({ mode, children }) => {
  const viewStyle = classNames({
    "relative overflow-x-clip overflow-y-visible": true,
    "bg-primary": mode === "primary",
    "bg-secondary": mode === "secondary",
  });
  return (
    <div className={viewStyle}>
      <section className="max-w-[1280px] h-full mx-auto md:px-8 xl:px-12 px-4">
        {children}
      </section>
    </div>
  );
};
