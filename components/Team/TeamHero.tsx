import React from "react";
import Image from "next/image";

const TeamHero: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-between bg-customBg px-[3rem] py-12 dark:bg-customDarkBg md:flex-row md:px-[6rem]">
      {/* First Column */}
      <div className="mb-8 flex max-w-md flex-col items-start gap-4 md:mb-0 md:mr-8 lg:max-w-xl">
        <h1 className="text-2xl font-semibold text-primary md:text-left md:text-4xl xl:text-5xl">
          Meet The team
        </h1>
        {/* Paragraph */}
        <p className="mb-6 text-lg leading-relaxed text-customTextColor dark:text-customDarkTextColor md:text-left md:text-xl">
          Meet the dedicated individuals who drive our company forward with
          their expertise, creativity, and commitment.
        </p>
      </div>
      {/* Second Column */}
      <div className="justify-center xs:hidden md:flex md:justify-end">
        <Image
          src="/images/team-images/newUploads/heroDesktop.png"
          alt="The Team"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="justify-center xs:flex md:hidden md:justify-end">
        <Image
          src="/images/team-images/newUploads/heroMobile.png"
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
