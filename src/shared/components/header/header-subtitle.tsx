interface Props {
  text: string;
}

export const HeaderSubtitle: React.FC<Props> = ({ text }) => {
  return (
    <p className="lg:text-2xl text-lg font-light lg:max-w-[450px] max-w-[350px] text-secondary-dark text-center sm:text-left">
      {text}
    </p>
  );
};
