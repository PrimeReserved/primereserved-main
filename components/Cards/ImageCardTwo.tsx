import React from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import BtnArrowIcon from "../Buttons/BtnArrowIcon";
import IconButton from "../Buttons/IconButton";
import IconButtonHref from "../Buttons/IconButtonHref";

const ImageCardTwo = () => {
  return (
    <section className="w-full bg-customBg dark:bg-customDarkBg">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 py-12 md:flex-row">
        {/* Column 1: Image */}
        <div className="mb-8 md:w-1/2 lg:mb-0">
          <Image
            src="/images/homepage-images-two/expertTwo.png"
            alt="Expert image"
            width={450}
            height={300}
            className="h-auto w-full md:w-auto"
          />
        </div>
        {/* Column 2: Content */}
        <div className="flex flex-col items-start md:w-1/2 lg:ml-8">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl ">
            Revolutionizing Online Infrastructure
          </h2>
          <p className="text-md mb-6 text-customTextColor dark:text-customDarkTextColor md:text-lg">
            Embark on a technological voyage with PrimeReserved as we
            revolutionize web development landscapes. Our expertise lies in
            architecting robust online experiences, meticulously designed for
            the dynamic demands of industry leaders.
          </p>
          <p className="text-md mb-6 text-customTextColor dark:text-customDarkTextColor md:text-lg">
            Our proficiency extends into the intricacies of large scale web
            projects, seamlessly merging innovation and precision to craft
            experiences as dynamic as the tech giants we serve.
          </p>
          <IconButtonHref
            text="More About Us"
            icon={<BtnArrowIcon />}
            href="/about"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageCardTwo;
