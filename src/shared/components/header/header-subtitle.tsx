interface Props {
  text: string;
}

export const HeaderSubtitle: React.FC<Props> = ({ text }) => {
  return <p className="z-10">{text}</p>;
};
