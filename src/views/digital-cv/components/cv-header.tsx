import {
  Header,
  HeaderSubtitle,
  HeaderTitle,
} from "@/shared/components/header";
import wave from "@/assets/wave-small.svg";
interface Props {}

export const CvHeader: React.FC<Props> = () => {
  return (
    <Header>
      <div
        className="absolute left-1/2 -translate-x-1/2 scale-105 w-full h-full max-h-[300px] lg:max-h-[370px] max-w-[1947px] bg-cover bg-center"
        style={{ backgroundImage: `url(${wave})` }}
      ></div>
      <div className="flex flex-col items-center sm:items-start gap-5 lg:gap-8 relative pt-20 pb-10 md:pb-16">
        <HeaderTitle>
          <span>Digital CV</span>
        </HeaderTitle>
        <div>
          <HeaderSubtitle text="Discover my skills and experience" />
          <HeaderSubtitle text="See how my expertise can add value to your next project" />
        </div>
      </div>
    </Header>
  );
};
