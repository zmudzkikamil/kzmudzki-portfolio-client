import { motion } from "motion/react";
import { ExperiencePosition } from "@/api/types/experience";
import { Badge } from "@/shared/components/badge/badge";
import { useAnimationReady } from "@/utils/useAnimationReady";

interface Props {
  position: ExperiencePosition;
  positionsLength: number;
  index: number;
}

export const Position: React.FC<Props> = ({
  position,
  index,
  positionsLength,
}) => {
  const delay = index * 0.15;
  const ready = useAnimationReady();

  return (
    <>
      <div className="flex flex-col items-center">
        {positionsLength > 1 && (
          <>
            <motion.div
              className="flex items-center size-4 rounded-full bg-primary shrink-0"
              initial={{ scale: 0 }}
              whileInView={ready ? { scale: 1 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.25, ease: "easeOut", delay }}
            />
            {index < positionsLength - 1 && (
              <motion.div
                className="h-full w-1 bg-primary my-0.5 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={ready ? { scaleY: 1 } : undefined}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: delay + 0.2,
                }}
              />
            )}
          </>
        )}
      </div>
      <motion.div
        className="col-start-2 mb-6 sm:mb-10 flex flex-col gap-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={ready ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", delay }}
      >
        <h3 className="font-bold text-lg sm:text-xl leading-none">
          {position.title}
        </h3>
        <p className="text-base text-black/70">{position.period}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-3">
          {position.skills.map((skill, index) => (
            <Badge key={index} label={skill} variant="grey" />
          ))}
        </div>
        <p>{position.description}</p>
      </motion.div>
    </>
  );
};
