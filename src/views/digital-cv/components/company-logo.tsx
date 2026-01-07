import { CompanyName } from "@/api/types/experience";

interface Props {
  companyName: CompanyName;
}

export const CompanyLogo: React.FC<Props> = ({ companyName }) => {
  const renderLogo = (companyName: CompanyName) => {
    switch (companyName) {
      case "Deloitte":
        return <img src="/src/assets/deloitte.svg" alt="Deloitte logo" />;
      case "Fujitsu Technology Solutions":
        return (
          <img
            src="/src/assets/fujitsu.png"
            alt="Fujitsu Technology Solutions logo"
          />
        );
      case "Freelancer Web Development":
        return <span className="font-zendots text-2xl text-white">ZK</span>;
      default:
        return null;
    }
  };
  return (
    <div className="flex items-center justify-center size-16 bg-primary rounded col-start-1">
      {renderLogo(companyName)}
    </div>
  );
};
