import { Cert } from "@/api/types/certs";
import { Icon } from "@/shared/components/icon";
import { timestampToDate } from "@/utils/timestampToDate";

interface Props {
  cert: Cert;
}

export const Certification: React.FC<Props> = ({ cert }) => {
  return (
    <div className="flex gap-10 items-center w-full h-48 bg-secondary-dark p-6 rounded-2xl">
      <Icon variant="primary" iconClassName={cert.icon} size="large" />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold">{cert.name}</h3>
        <p className="text-black/70">{cert.description}</p>
        <div className="flex flex-row gap-10">
          <p className="text-black">{`Issued at: ${timestampToDate(cert.dateIssued)}`}</p>
          {cert.expirationDate && (
            <p className="text-black">{`Expires at: ${timestampToDate(cert.expirationDate)}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};
