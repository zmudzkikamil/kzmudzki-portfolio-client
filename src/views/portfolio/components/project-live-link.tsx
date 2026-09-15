import { classNames } from "@/utils/classNames";

interface Props {
  url: string;
  className?: string;
}

/**
 * Invitation to go and see a deployed project for real. Only projects that are
 * actually published carry a `url`, so the caller renders this conditionally.
 */
export const ProjectLiveLink: React.FC<Props> = ({ url, className }) => {
  // The bare domain is the label: it tells the visitor where they are about to
  // be taken, which a generic "visit website" does not.
  const domain = url.replace(/^https?:\/\//, "").replace(/\/+$/, "");

  return (
    <div
      className={classNames({
        "flex flex-col sm:flex-row items-center sm:items-baseline gap-3 sm:gap-5":
          true,
        [className as string]: !!className,
      })}
      data-testid="project-live-link"
    >
      <p className="text-lg text-secondary/90 text-center sm:text-left">
        This project is live. Have a look for yourself:
      </p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-cta min-w-max text-base lg:text-lg leading-none font-bold text-black transition-colors hover:bg-white"
      >
        {domain}
        <i
          className="fa-solid fa-arrow-up-right-from-square text-sm"
          aria-hidden="true"
        />
      </a>
    </div>
  );
};
