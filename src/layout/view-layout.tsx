import { Container } from "@/shared/components/container";
import { Variant } from "@/shared/types/Variant";
import { classNames } from "@/utils/classNames";

interface Props {
  mode: Exclude<Variant, "grey" | "cta">;
  children: React.ReactNode;
}

export const ViewLayout: React.FC<Props> = ({ mode, children }) => {
  const viewStyle = classNames({
    "bg-[url('src/assets/primary-bg.png')] bg-contain bg-no-repeat bg-center":
      mode === "primary",
    "bg-[url('src/assets/secondary-bg.png')] bg-contain bg-no-repeat bg-center":
      mode === "secondary",
  });
  return (
    <div className={viewStyle}>
      <Container>{children}</Container>
    </div>
  );
};
