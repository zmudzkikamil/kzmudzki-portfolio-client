interface Props {
  children: React.ReactNode;
}

export const Header: React.FC<Props> = ({ children }) => {
  return <header className="text-secondary [&>*]:z-10">{children}</header>;
};
