import { paths } from "@/config/paths";
import { useLocation, useNavigate, Link } from "react-router";
import { FooterSignature } from "./footer-signature";
import { Title } from "@/shared/components/title";
import { Container } from "@/shared/components/container";
import Button from "@/shared/components/form/button";
import { LinkButton } from "@/shared/components/form/link-button";
import wave from "@/assets/wave-footer.svg";

interface Props {}

const copy = {
  en: {
    title: "Get in touch",
    leadShort: "Let's build something great together!",
    leadRest:
      "Feel free to reach out for collaboration, freelance projects, or just to say hi.",
    button: "Contact me",
  },
  pl: {
    title: "Skontaktuj się",
    leadShort: "Zbudujmy razem coś wyjątkowego!",
    leadRest:
      "Napisz śmiało w sprawie współpracy, zlecenia lub po prostu, żeby się przywitać.",
    button: "Napisz do mnie",
  },
} as const;

export const Footer: React.FC<Props> = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // The drone page is the only Polish-language view, so its footer follows suit.
  const isDronePage = pathname === paths.drone.path;
  const language = isDronePage ? "pl" : "en";
  const { title, leadShort, leadRest, button } = copy[language];

  const onClick = () => {
    navigate(paths.contact.getHref());
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
        <img
          src={wave}
          alt=""
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-full max-h-[360px] lg:max-h-[399px] max-w-[1947px] object-cover object-center scale-105"
        />
        <div className="flex flex-col gap-6 sm:gap-12">
          <Title title={title} />
          <p className="lg:text-2xl text-lg font-light max-w-[75%]">
            {leadShort} <span className="hidden sm:inline">{leadRest}</span>
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 md:gap-20">
            <div className="flex flex-row lg:items-center gap-3 sm:gap-6 lg:gap-10 xl:gap-12">
              <Button label={button} onClick={onClick} />
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
            <div className="flex flex-col gap-2">
              <FooterSignature language={language} />
              {!isDronePage && (
                <Link
                  to={paths.drone.getHref()}
                  className="text-grey text-sm hover:text-secondary transition-colors"
                >
                  <i className="fa-solid fa-camera mr-2" />
                  Drone Photography & Videography
                </Link>
              )}
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};
