import { classNames } from "@/utils/classNames";

interface Props {
  className?: string;
  language?: "en" | "pl";
}

export const FooterSignature: React.FC<Props> = ({
  className,
  language = "en",
}) => {
  const signatureStyle = classNames({
    "text-secondary lg:text-2xl text-lg font-light tracking-wide": true,
    [className as string]: !!className,
  });
  return (
    <p className={signatureStyle}>
      {language === "pl" ? "Projekt i realizacja:" : "Designed & Developed by"}
      <span className="font-extrabold"> Kamil Żmudzki</span>
    </p>
  );
};
