interface Props {
  children: React.ReactNode;
}

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="flex flex-col text-secondary gap-6 [&>*]:z-10">
      {children}
    </header>
  );
};
