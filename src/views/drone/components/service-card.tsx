import { Icon } from "@/shared/components/icon";

interface Props {
  icon: string;
  title: string;
  description: string;
  startingFrom?: string;
}

export const ServiceCard: React.FC<Props> = ({
  icon,
  title,
  description,
  startingFrom,
}) => {
  return (
    <div className="bg-primary-lighter rounded-2xl p-6 flex flex-col gap-4">
      <Icon iconClassName={icon} variant="secondary" size="default" />
      <h3 className="text-secondary font-bold text-xl">{title}</h3>
      <p className="text-grey-light font-light leading-relaxed">
        {description}
      </p>
      {startingFrom && (
        <p className="text-cta font-semibold text-sm mt-auto pt-2">
          Starting from {startingFrom}
        </p>
      )}
    </div>
  );
};
