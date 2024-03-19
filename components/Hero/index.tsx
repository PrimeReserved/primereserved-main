import React from "react";
import { BiRocket } from "react-icons/bi";
import Image from "next/image";

const DynamicScrollToContactButton = React.lazy(
  () => import("../Buttons/ScrollToContactButton"),
);

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto my-12 flex flex-col items-center justify-between py-20 md:flex-row">
      {/* First Column */}
      <div className="mb-8 flex max-w-md flex-col items-start gap-4 md:mb-0 md:mr-8 lg:max-w-xl">
        {/* Button */}
        <button className="mb-4 flex cursor-text items-center rounded-full bg-gray-100 px-4 py-3 text-sm dark:text-customDarkBg">
          Elevate your brand
          <span className="ml-2 text-primary">
            <BiRocket />
          </span>
        </button>
        {/* Heading */}
        <h1
          className="mb-4 text-3xl font-extrabold md:text-left md:text-4xl xl:text-5xl"
          style={{ lineHeight: "1.4" }}
        >
          Igniting <span className="text-primary underline">Ideas</span> <br />
          Inspiring <span className="text-primary underline">Innovation</span>
        </h1>
        {/* Paragraph */}
        <p className="mb-6 text-lg leading-relaxed text-customTextColor dark:text-customDarkTextColor md:text-left md:text-xl">
          PrimeReserved—Your Ultimate Destination for Outstanding Website
          Designs and Seamless Application Developments. Your satisfaction is
          our prime reserve!
        </p>
        {/* Contact Button */}
        <React.Suspense fallback={<div>Loading...</div>}>
          <DynamicScrollToContactButton />
        </React.Suspense>
      </div>
      {/* Second Column */}
      <div className="flex justify-center md:justify-end">
        <Image
          src="/images/homepage-images/creation.svg"
          alt="Hero Image"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
