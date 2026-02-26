import { Container } from "@/shared/components/container";
import { Variant } from "@/shared/types/Variant";
import { classNames } from "@/utils/classNames";
import primaryBg from "@/assets/primary-bg.png";
import secondaryBg from "@/assets/secondary-bg.png";

interface Props {
  mode: Exclude<Variant, "grey" | "cta">;
  children: React.ReactNode;
}

export const ViewLayout: React.FC<Props> = ({ mode, children }) => {
  const viewStyle = classNames({
    "bg-contain bg-no-repeat bg-center": true,
  });
  const bgImage = mode === "primary" ? primaryBg : secondaryBg;
  return (
    <div className={viewStyle} style={{ backgroundImage: `url(${bgImage})` }}>
      <Container>{children}</Container>
    </div>
  );
};
