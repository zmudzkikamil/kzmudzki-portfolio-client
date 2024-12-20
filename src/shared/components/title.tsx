interface Props {
  title: string;
}

export const Title: React.FC<Props> = ({ title }) => {
  return <h2 className="text-4xl lg:text-[3.5rem] font-bold">{title}</h2>;
};
