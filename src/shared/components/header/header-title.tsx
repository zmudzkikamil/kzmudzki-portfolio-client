interface Props {
  children: React.ReactNode;
}

export const HeaderTitle: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="text-6xl font-bold z-10 text-secondary mt-12">{children}</h1>
  );
};
