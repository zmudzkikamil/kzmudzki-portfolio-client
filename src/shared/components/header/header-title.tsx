interface Props {
  children: React.ReactNode;
}

export const HeaderTitle: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="text-7xl md:text-5xl font-bold text-secondary mt-10">
      {children}
    </h1>
  );
};
