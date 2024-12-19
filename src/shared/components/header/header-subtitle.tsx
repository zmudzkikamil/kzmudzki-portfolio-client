interface Props {
  text: string;
}

export const HeaderSubtitle: React.FC<Props> = ({ text }) => {
  return (
    <p className="text-3xl md:text-xl font-light max-w-[570px] md:max-w-[400px] text-secondary-dark">
      {text}
    </p>
  );
};
