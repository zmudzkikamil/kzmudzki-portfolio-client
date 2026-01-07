import { paths } from "@/config/paths";
import { useLocation, useNavigate } from "react-router";
import { FooterSignature } from "./footer-signature";
import { Title } from "@/shared/components/title";
import { Container } from "@/shared/components/container";
import Button from "@/shared/components/form/button";
import { LinkButton } from "@/shared/components/form/link-button";
import wave from "@/assets/wave-footer.svg";

interface Props {}

export const Footer: React.FC<Props> = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/contact");
  };

  if (pathname === paths.contact.path) {
    return (
      <footer className="h-[10rem] w-full flex items-center justify-center">
        <FooterSignature className="text-center" />
      </footer>
    );
  }

  return (
    // {/* Tailwind arbitrary values used here because of specific shape of header. */}
    <Container>
      <footer className="[&>*]:z-10 h-[25rem] flex flex-col justify-end pb-10 text-secondary tracking-wide">
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 scale-105 w-full h-full max-h-[360px] lg:max-h-[399px] max-w-[1947px] bg-cover bg-center"
          style={{ backgroundImage: `url(${wave})` }}
        ></div>
        <div className="flex flex-col gap-6 sm:gap-12">
          <Title title="Get in touch" />
          <p className="lg:text-2xl text-lg font-light max-w-[75%]">
            Let's build something great together!{" "}
            <span className="hidden sm:inline">
              Feel free to reach out for collaboration, freelance projects, or
              just to say hi.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 md:gap-20">
            <div className="flex flex-row lg:items-center gap-3 sm:gap-6 lg:gap-10 xl:gap-12">
              <Button label="Contact me" onClick={onClick} />
              <div className="flex justify-center sm:justify-start gap-3 sm:gap-6 lg:gap-10 xl:gap-12">
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
            <FooterSignature />
          </div>
        </div>
      </footer>
    </Container>
  );
};
