import { classNames } from "@/utils/classNames";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Header: React.FC<Props> = ({ children, className }) => {
  const headerStyle = classNames({
    "text-secondary [&>*]:z-10": true,
    [className as string]: !!className,
  });
  return <header className={headerStyle}>{children}</header>;
};
