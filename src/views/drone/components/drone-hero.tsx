import Button from "@/shared/components/form/button";
import {
  Header,
  HeaderSubtitle,
  HeaderTitle,
} from "@/shared/components/header";
import { useNavigate } from "react-router";

export const DroneHero: React.FC = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Header className="pt-28">
      <div className="flex flex-col items-center sm:items-start gap-4 lg:gap-7 pb-10 md:pb-16 space-y-4">
        <HeaderTitle text={["Fotografia Lotnicza", "i Wideo Dronem"]} />
        <HeaderSubtitle
          text="Profesjonalna fotografia i wideo dronem dla nieruchomości, klientów biznesowych i przedsiębiorców."
          className="lg:max-w-[520px] max-w-[380px]"
        />
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2">
          <Button
            label="Zapytaj o wycenę"
            onClick={() => navigate("/contact")}
          />
          <button
            onClick={scrollToServices}
            className="text-secondary font-semibold underline underline-offset-4 hover:text-grey-light transition-colors"
          >
            Zobacz usługi ↓
          </button>
        </div>
      </div>
    </Header>
  );
};
