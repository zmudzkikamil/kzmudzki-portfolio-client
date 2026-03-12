import { motion } from "motion/react";
import { AboutMeStep } from "@/api/types/about-me";
import { Icon } from "@/shared/components/icon";
import { useAnimationReady } from "@/utils/useAnimationReady";

interface Props {
  item: AboutMeStep;
  index: number;
}

export const AboutMeItem: React.FC<Props> = ({ item, index }) => {
  const delay = index * 0.1;
  const ready = useAnimationReady();

  return (
    <>
      <motion.p
        className="hidden sm:block font-bold pt-10 leading-none sm:leading-none"
        initial={{ opacity: 0, y: 16 }}
        whileInView={ready ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", delay }}
      >
        {item.year}
      </motion.p>
      <div className="flex flex-col items-center">
        <Icon iconClassName={item.icon} variant="primary" size="small" />
        <motion.div
          className="h-full w-1 sm:w-2 bg-primary origin-top"
          initial={{ scaleY: 0 }}
          whileInView={ready ? { scaleY: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: delay + 0.15 }}
        />
      </div>
      <motion.div
        className="flex flex-col self-start gap-3 sm:gap-5"
        initial={{ opacity: 0, y: 16 }}
        whileInView={ready ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", delay }}
      >
        <h2 className="font-bold pt-8 sm:pt-10 leading-none">{item.title}</h2>
        <p className="pb-12 sm:pb-14">{item.description}</p>
      </motion.div>
    </>
  );
};
