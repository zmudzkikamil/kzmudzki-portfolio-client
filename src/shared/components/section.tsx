interface Props {
  children: React.ReactNode;
  id: string;
}

export const Section: React.FC<Props> = ({ children, id }) => {
  return (
    <section className="flex flex-col gap-20" id={id}>
      {children}
    </section>
  );
};
