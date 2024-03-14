import React from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import BtnArrowIcon from "../Buttons/BtnArrowIcon";
import IconButtonHref from "../Buttons/IconButtonHref";

const ImageCardOne = () => {
  return (
    <section className="w-full bg-customBg dark:bg-customDarkBg">
      <div className="container mx-auto flex flex-col-reverse items-center justify-center gap-8 py-12 md:flex-row">
        {/* Column 1: Image */}
        <div className="mb-8 p-4 md:flex-1 lg:mb-0">
          <Image
            src="/images/homepage-images-2/expertgrouped-mobile.png"
            alt="Expert image"
            width={800}
            height={700}
            className="h-auto w-full md:w-auto"
          />
        </div>
        {/* Column 2: Content */}
        <div className="flex flex-col items-start p-4 md:flex-1">
          <p className="mb-2 text-xl font-bold text-primary md:text-lg">
            EXPERTS IN THE FIELD
          </p>
          <h2 className="mb-4 text-lg font-bold lg:text-3xl">
            Empowering Your Online Presence
          </h2>
          <p className="text-md my-4 text-customTextColor dark:text-customDarkTextColor md:text-lg">
            At PrimeReserved, we are dedicated to transforming your digital
            landscape. Our expertise goes beyond conventional boundaries,
            delivering innovative solutions that drive growth and success.
          </p>
          <ul className="my-4">
            <li className="mb-4 flex items-center text-lg font-semibold dark:text-customDarkTextColor">
              <FiCheck className="mr-2 text-lg" />
              Professional Designs
            </li>
            <li className="mb-4 flex items-center text-lg font-semibold dark:text-customDarkTextColor">
              <FiCheck className="mr-2 text-lg" />
              Proven Expertise
            </li>
            <li className="mb-4 flex items-center text-lg font-semibold dark:text-customDarkTextColor">
              <FiCheck className="mr-2 text-lg" />
              Cutting Edge Development
            </li>
            <li className="mb-4 flex items-center text-lg font-semibold dark:text-customDarkTextColor">
              <FiCheck className="mr-2 text-lg" />
              User centric Approach
            </li>
            <li className="mb-4 flex items-center text-lg font-semibold dark:text-customDarkTextColor">
              <FiCheck className="mr-2 text-lg" />
              Timely Delivery
            </li>
          </ul>
          <IconButtonHref
            text="Learn More"
            href="/services"
            icon={<BtnArrowIcon />}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageCardOne;
