interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[1280px] h-full mx-auto md:px-8 xl:px-12 px-4">
      {children}
    </div>
  );
};
