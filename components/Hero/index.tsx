"use client";
import React, { useEffect, useRef } from "react";
import IconButton from "../Buttons/IconButton";
import BtnArrowIcon from "../Buttons/BtnArrowIcon";

const Hero: React.FC = () => {
  const underline1Ref = useRef<HTMLSpanElement | null>(null);
  const underline2Ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const animateUnderline = (el: HTMLSpanElement | null) => {
      if (!el) return;

      // Grow height
      el.classList.remove("h-[3px]");
      el.classList.add("h-[10px]");

      // Shrink it back after a short delay
      setTimeout(() => {
        el.classList.remove("h-[10px]");
        el.classList.add("h-[3px]");
      }, 2500); // Allow half the interval to animate

      // Toggle gradient colors
      const toggleGradient = () => {
        el.classList.toggle("from-amber-500");
        el.classList.toggle("via-amber-600");
        el.classList.toggle("to-amber-700");

        el.classList.toggle("from-blue-600");
        el.classList.toggle("via-blue-700");
        el.classList.toggle("to-blue-500");

        el.classList.toggle("dark:from-amber-300");
        el.classList.toggle("dark:via-amber-400");
        el.classList.toggle("dark:to-amber-500");

        el.classList.toggle("dark:from-blue-300");
        el.classList.toggle("dark:via-blue-400");
        el.classList.toggle("dark:to-blue-500");
      };

      toggleGradient();
    };

    const interval = setInterval(() => {
      animateUnderline(underline1Ref.current);
      animateUnderline(underline2Ref.current);
    }, 9000); // Every 9 seconds

    // Initial animation on mount
    animateUnderline(underline1Ref.current);
    animateUnderline(underline2Ref.current);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto mt-10 flex flex-col items-center justify-center py-20 md:flex-row">
      <div className="mb-8 flex max-w-xl flex-col items-center gap-4 md:mb-0 md:max-w-4xl">
        <h1 className="mb-2 mt-12 text-center text-5xl font-black tracking-tight md:text-5xl xl:text-6xl">
          <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-500 bg-clip-text uppercase text-transparent">
            When
          </span>{" "}
          <span className="relative text-primary underline-offset-4">
            Only the Best Will Do
            <span
              ref={underline1Ref}
              className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 transition-all duration-[5000ms] ease-in-out dark:from-amber-300 dark:via-amber-400 dark:to-amber-500"
            ></span>
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-500 bg-clip-text uppercase text-transparent">
            We’re Who
          </span>{" "}
          <span className="relative text-primary underline-offset-4">
            You Call
            <span
              ref={underline2Ref}
              className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 transition-all duration-[5000ms] ease-in-out dark:from-amber-300 dark:via-amber-400 dark:to-amber-500"
            ></span>
          </span>
        </h1>

        <p className="mb-6 text-center text-lg leading-relaxed text-customTextColor dark:text-customDarkTextColor md:text-xl lg:max-w-2xl">
          From startups to elite brands — for brands that don’t settle — we
          build top-tier websites that demand attention, turning ambitious ideas
          into unforgettable digital icons, one website at a time.
        </p>
        <IconButton text="Start Your Project" icon={<BtnArrowIcon />} />
      </div>
    </section>
  );
};

export default Hero;
