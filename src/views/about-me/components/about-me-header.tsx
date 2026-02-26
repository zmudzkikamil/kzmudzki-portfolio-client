import Button from "@/shared/components/form/button";
import { LinkButton } from "@/shared/components/form/link-button";
import {
  Header,
  HeaderSubtitle,
  HeaderTitle,
} from "@/shared/components/header";
import { useNavigate } from "react-router";
import wave from "@/assets/wave-header.svg";
import userImg from "@/assets/user.png";
interface Props {}

export const AboutMeHeader: React.FC<Props> = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/contact");
  };
  return (
    <Header>
      {/* Tailwind arbitrary values used here because of specific shape of header. */}
      <img
        src={wave}
        alt=""
        className="absolute left-1/2 -translate-x-1/2 scale-105 w-full h-full max-h-[480px] max-w-[1947px] object-cover object-center"
      />
      <div className="flex flex-col items-center sm:items-start gap-4 lg:gap-7 relative pt-20 pb-10 md:pb-16">
        <HeaderTitle>
          <span className="block leading-tight sm:leading-snug">Hello,</span>
          <span className="block">I'm Kamil Żmudzki</span>
        </HeaderTitle>
        <HeaderSubtitle
          text="Software Engineer, Frontend Developer, AWS certified associate"
          className="lg:max-w-[450px] max-w-[350px]"
        />
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 xl:gap-12">
          <Button label="Contact me" onClick={onClick} />
          <div className="flex justify-center sm:justify-start gap-6 lg:gap-10 xl:gap-12">
            <LinkButton
              icon="fa-brands fa-github"
              url="https://github.com/zmudzkikamil"
              variant="cta"
            />
            <LinkButton
              icon="fa-brands fa-linkedin"
              url="https://www.linkedin.com/in/k-zmudzki/"
              variant="cta"
            />
          </div>
        </div>
        <img
          src={userImg}
          alt="user image"
          className="absolute hidden sm:block mt-20 right-0 top-10 md:top-4 max-h-[250px] md:max-h-[320px] lg:max-h-[350px]"
        />
      </div>
    </Header>
  );
};
