interface Props {
  children: React.ReactNode;
}

export const HeaderTitle: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="lg:text-6xl text-4xl font-bold text-secondary mt-8 text-center sm:text-left">
      {children}
    </h1>
  );
};
