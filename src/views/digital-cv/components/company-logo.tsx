import deloitteLogo from "@/assets/Deloitte.svg";
import fujitsuLogo from "@/assets/fujitsu.png";
import { CompanyName } from "@/api/types/experience";

interface Props {
  companyName: CompanyName;
}

export const CompanyLogo: React.FC<Props> = ({ companyName }) => {
  const renderLogo = (companyName: CompanyName) => {
    switch (companyName) {
      case "Deloitte":
        return <img src={deloitteLogo} alt="Deloitte logo" />;
      case "Fujitsu Technology Solutions":
        return (
          <img src={fujitsuLogo} alt="Fujitsu Technology Solutions logo" />
        );
      case "Freelancer Web Development":
        return (
          <span className="font-zendots text-xl sm:text-2xl text-white">
            ZK
          </span>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex items-center justify-center size-12 sm:size-16 bg-primary rounded col-start-1">
      {renderLogo(companyName)}
    </div>
  );
};
