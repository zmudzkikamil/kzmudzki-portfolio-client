import { motion } from "motion/react";
import { ExperienceCompany } from "@/api/types/experience";
import { parsePeriod } from "@/utils/parsePeriod";
import { slugify } from "@/utils/slugify";
import { useAnimationReady } from "@/utils/useAnimationReady";

const BAR_COLORS = ["#01473EFF", "#01473ED9", "#01473E99"] as const;

interface Props {
  companies: ExperienceCompany[];
}

export const ExperienceTimeline: React.FC<Props> = ({ companies }) => {
  const ready = useAnimationReady();

  const parsed = companies.map((c, i) => {
    const { start, end } = parsePeriod(c.period);
    return {
      id: c.id,
      name: c.company,
      start,
      end,
      color: BAR_COLORS[i % BAR_COLORS.length],
    };
  });

  const sorted = [...parsed].sort(
    (a, b) => a.start.getTime() - b.start.getTime(),
  );

  const earliest = sorted[0].start.getTime();
  const latest = Math.max(...sorted.map((p) => p.end.getTime()));
  const totalMs = latest - earliest;

  const totalYears = Math.round(totalMs / (1000 * 60 * 60 * 24 * 365));

  const getWidth = (start: Date, end: Date) =>
    ((end.getTime() - start.getTime()) / totalMs) * 100;

  const formatYear = (date: Date) => date.getFullYear().toString();

  return (
    <motion.div
      className="flex flex-col gap-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={ready ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* <p className="flex items-center gap-2 text-sm sm:text-base text-black/80 mb-2">
        <span className="bg-primary text-white text-xs sm:text-sm font-extrabold px-3 py-1 rounded">
          ~{totalYears} years
        </span>
        of commercial experience
      </p> */}
      <p className="font-light text-lg sm:text-xl leading-none">
        <span className="font-extrabold">~{totalYears} years</span> of
        commercial experience
      </p>

      {/* Bars */}
      <div className="flex gap-1 h-10 sm:h-12 overflow-hidden">
        {sorted.map((entry, i) => (
          <motion.div
            key={entry.name}
            className="flex items-center overflow-hidden rounded-md cursor-pointer transition-opacity hover:opacity-80"
            style={{ backgroundColor: entry.color }}
            onClick={() => {
              const slug = slugify(entry.name);
              history.replaceState(null, "", `#${slug}`);
              document
                .getElementById(slug)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            initial={{ width: 0 }}
            whileInView={
              ready
                ? { width: `${getWidth(entry.start, entry.end)}%` }
                : undefined
            }
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + i * 0.15,
              ease: "easeOut",
            }}
          >
            <span className="px-2 sm:px-3 text-xs sm:text-sm font-bold truncate whitespace-nowrap text-white">
              {entry.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Year labels aligned to bars */}
      <div className="flex gap-1 text-xs sm:text-sm text-black/50">
        {sorted.map((entry, i) => (
          <div
            key={entry.name}
            className="flex justify-between"
            style={{ width: `${getWidth(entry.start, entry.end)}%` }}
          >
            <span>{formatYear(entry.start)}</span>
            {i === sorted.length - 1 && <span>{formatYear(entry.end)}</span>}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
