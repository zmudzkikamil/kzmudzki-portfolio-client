import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

interface Props {
  text: string | string[];
}

const Cursor = () => (
  <motion.span
    animate={{ opacity: [1, 0] }}
    transition={{ repeat: Infinity, duration: 0.5, ease: "easeIn" }}
    className="inline-block w-[3px] h-[0.85em] bg-secondary align-middle ml-0.5"
  />
);

export const HeaderTitle: React.FC<Props> = ({ text }) => {
  const lines = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const fullText = useMemo(() => lines.join("\n"), [lines]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [fullText]);

  useEffect(() => {
    if (count >= fullText.length) return;
    const timer = setTimeout(
      () => setCount((c) => c + 1),
      Math.max(Math.random() * 125, 65),
    );
    return () => clearTimeout(timer);
  }, [count, fullText.length]);

  const isTyping = count < fullText.length;
  const displayedLines = fullText.slice(0, count).split("\n");

  return (
    <h1 className="relative lg:text-6xl text-4xl font-semibold text-secondary mt-8 text-center sm:text-left tracking-wide">
      {/* Ghost layer — invisible but reserves the full height for all lines */}
      <span aria-hidden="true" className="invisible select-none">
        {lines.length === 1 ? (
          fullText
        ) : (
          <>
            <span className="block leading-tight sm:leading-snug">
              {lines[0]}
            </span>
            {lines.slice(1).map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </>
        )}
      </span>

      {/* Typed content — absolutely positioned over the ghost */}
      <span className="absolute inset-0">
        {lines.length === 1 ? (
          <>
            {displayedLines[0]}
            {isTyping && <Cursor />}
          </>
        ) : (
          <>
            <span className="block leading-tight sm:leading-snug">
              {displayedLines[0] ?? ""}
              {isTyping && displayedLines.length === 1 && <Cursor />}
            </span>
            {lines.slice(1).map((_, i) => (
              <span key={i} className="block">
                {displayedLines[i + 1] ?? ""}
                {isTyping && displayedLines.length === i + 2 && <Cursor />}
              </span>
            ))}
          </>
        )}
      </span>
    </h1>
  );
};
