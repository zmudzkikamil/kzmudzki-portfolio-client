interface Props {
  title: string;
}

export const Header: React.FC<Props> = () => {
  return (
    <div className="flex items-center justify-center">
      <header className="grow bg-[url('src/assets/image2.png')] bg-cover bg-center max-w-[2054px] 2xl:h-[635px] xl:h-[500px] lg:h-[400px] sm:h-[310px] h-[200px]">
        <h1>
          Hello,<br></br> I'm Kamil Żmudzki
        </h1>
      </header>
    </div>
  );
};
