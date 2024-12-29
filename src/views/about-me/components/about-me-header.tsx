import Button from "@/shared/components/form/button";
import { LinkBbutton } from "@/shared/components/form/link-button";
import {
  Header,
  HeaderSubtitle,
  HeaderTitle,
} from "@/shared/components/header";
import { useNavigate } from "react-router";

interface Props {}

export const AboutMeHeader: React.FC<Props> = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/contact");
  };
  return (
    <Header>
      {/* Tailwind arbitrary values used here because of specific shape of header. */}
      <div className="absolute left-1/2 -translate-x-1/2 scale-105 w-full h-full max-h-[399px] max-w-[1947px] bg-[url('src/assets/header.svg')] bg-cover bg-center"></div>
      <div className="flex flex-col items-center sm:items-start gap-4 lg:gap-5 relative">
        <HeaderTitle>
          <span className="block leading-tight sm:leading-snug tracking-wide">
            Hello,
          </span>
          <span className="block tracking-wide">I'm Kamil Żmudzki</span>
        </HeaderTitle>
        <HeaderSubtitle text="Software Engineer, Frontend Developer, AWS certified associate" />
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 xl:gap-12">
          <Button label="Contact me" onClick={onClick} />
          <div className="flex justify-center sm:justify-start gap-6 lg:gap-10 xl:gap-12">
            <LinkBbutton
              icon="fa-brands fa-github"
              url="https://github.com/zmudzkikamil"
              variant="cta"
            />
            <LinkBbutton
              icon="fa-brands fa-linkedin"
              url="https://www.linkedin.com/in/k-zmudzki/"
              variant="cta"
            />
          </div>
        </div>
        <img
          src="src/assets/user.png"
          alt="user image"
          className="absolute hidden sm:block right-0 top-10 md:top-2 max-h-[250px] md:max-h-[320px] lg:max-h-[350px]"
        />
      </div>
    </Header>
  );
};
