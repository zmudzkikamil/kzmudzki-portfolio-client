import { classNames } from "@/utils/classNames";

interface Props {
  text: string;
  className?: string;
}

export const HeaderSubtitle: React.FC<Props> = ({ text, className }) => {
  const subtitleStyle = classNames({
    "lg:text-2xl text-lg font-light text-secondary-dark text-center sm:text-left":
      true,
    [className as string]: !!className,
  });
  return <p className={subtitleStyle}>{text}</p>;
};
