import { classNames } from "@/utils/classNames";

interface Props {
  className?: string;
}

export const FooterSignature: React.FC<Props> = ({ className }) => {
  const signatureStyle = classNames({
    "text-secondary lg:text-2xl text-lg font-light tracking-wide": true,
    [className as string]: !!className,
  });
  return (
    <p className={signatureStyle}>
      Designed & Developed by
      <span className="font-extrabold"> Kamil Żmudzki</span>
    </p>
  );
};
