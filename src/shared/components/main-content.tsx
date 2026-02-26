import { classNames } from "@/utils/classNames";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const MainContent: React.FC<Props> = ({ children, className }) => {
  const mainContentStyles = classNames({
    "flex flex-col gap-16 sm:gap-24 my-28": true,
    [className!]: !!className,
  });

  return <main className={mainContentStyles}>{children}</main>;
};
