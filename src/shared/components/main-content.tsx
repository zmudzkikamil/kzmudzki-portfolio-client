interface Props {
  children: React.ReactNode;
}

export const MainContent: React.FC<Props> = ({ children }) => {
  return <main className="flex flex-col gap-24 my-28">{children}</main>;
};
