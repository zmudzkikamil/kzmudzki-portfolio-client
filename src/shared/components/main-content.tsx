interface Props {
  children: React.ReactNode;
}

export const MainContent: React.FC<Props> = ({ children }) => {
  return <main className="flex flex-col gap-6 mt-14">{children}</main>;
};
