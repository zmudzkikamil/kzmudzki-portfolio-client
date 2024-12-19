import { Variant } from "@/shared/types/Variant";
import { classNames } from "@/utils/classNames";

interface Props {
  mode: Exclude<Variant, "grey">;
  children: React.ReactNode;
}

export const ViewLayout: React.FC<Props> = ({ mode, children }) => {
  const viewStyle = classNames({
    "h-[1200px] relative overflow-x-clip overflow-y-visible": true,
    "bg-primary": mode === "primary",
    "bg-secondary": mode === "secondary",
  });
  return (
    <div className={viewStyle}>
      <section className="container 2xl:max-w-[1280px] h-full mx-auto px-6">
        {children}
      </section>
    </div>
  );
};
