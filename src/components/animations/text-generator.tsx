"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerator = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  if (!text) return (<></>)
  let textArray = text.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 5,
        delay: stagger(0.5),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {textArray.map((curText, idx) => {
          return (
            <motion.span
              key={curText + idx}
              className="dark:text-white text-black  opacity-30"
            >
              {curText}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
