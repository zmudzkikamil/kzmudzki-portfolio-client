import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useAnimationReady } from "@/utils/useAnimationReady";

interface CircularProgressProps {
  percentage: number;
  strokeWidth?: number;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  strokeWidth = 14,
}) => {
  const radius = (176 - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const ref = useRef<HTMLDivElement>(null);
  const ready = useAnimationReady();
  const [inView, setInView] = useState(false);

  // Only start observing after scroll restoration has settled.
  // Using a manual IntersectionObserver (instead of motion's useInView) so the
  // observer is never created during the scroll-restoration window.
  useEffect(() => {
    if (!ready || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ready]);

  const count = useMotionValue(0);
  const strokeOffset = useTransform(
    count,
    (v) => circumference - (v / 100) * circumference,
  );
  const [displayNum, setDisplayNum] = useState(0);

  useMotionValueEvent(count, "change", (v) => {
    setDisplayNum(Math.round(v));
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, percentage, {
      duration: 1.5,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, inView, percentage]);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center w-44 h-44"
    >
      {/* Background Circle */}
      <svg className="absolute w-full h-full">
        <circle
          className="text-secondary-dark"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={176 / 2}
          cy={176 / 2}
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute w-full h-full transform scale-x-[-1] rotate-[90deg]">
        <motion.circle
          className="text-primary"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={176 / 2}
          cy={176 / 2}
          strokeDasharray={circumference}
          strokeDashoffset={strokeOffset}
        />
      </svg>

      <span className="text-3xl font-bold text-black">{displayNum}%</span>
    </div>
  );
};
