import React from "react";
import Image from "next/image";

const TeamHero: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-between bg-customBg px-[3rem] py-12 md:flex-row md:px-[6rem]">
      {/* First Column */}
      <div className="mb-8 flex max-w-md flex-col items-start gap-4 md:mb-0 md:mr-8 lg:max-w-xl">
        <h1
          className="mb-4 text-3xl font-extrabold text-primary md:text-left md:text-5xl xl:text-6xl"
          style={{ lineHeight: "1.4" }}
        >
          Meet The team
        </h1>
        {/* Paragraph */}
        <p className="mb-6 text-lg leading-relaxed text-customTextColor md:text-left md:text-2xl">
          Meet the dedicated individuals who drive our company forward with
          their expertise, creativity, and commitment
        </p>
      </div>
      {/* Second Column */}
      <div className="flex justify-center md:justify-end">
        <Image
          src="/images/team-images/HeroSection.png"
          alt="The Team"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default TeamHero;