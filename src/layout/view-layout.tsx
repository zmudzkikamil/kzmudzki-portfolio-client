import { Container } from "@/shared/components/container";
import { Variant } from "@/shared/types/Variant";
import { classNames } from "@/utils/classNames";

interface Props {
  mode: Exclude<Variant, "grey" | "cta">;
  children: React.ReactNode;
}

export const ViewLayout: React.FC<Props> = ({ mode, children }) => {
  const viewStyle = classNames({
    "bg-primary": mode === "primary",
    "bg-secondary": mode === "secondary",
  });
  return (
    <div className={viewStyle}>
      <section>
        <Container>{children}</Container>
      </section>
    </div>
  );
};
