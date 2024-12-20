interface Props {
  children: React.ReactNode;
}

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="text-secondary [&>*]:z-10 h-[26.25rem]">
      {children}
    </header>
  );
};
