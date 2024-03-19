import React from "react";
import { ReactNode } from "react";

interface OurValueCardProps {
  ourValueHeading: string;
  ourValueParagraph: ReactNode;
  ourPurposeHeading: string;
  ourPurposeParagraph: ReactNode;
}

const OurValueCard: React.FC<OurValueCardProps> = ({
  ourValueHeading,
  ourValueParagraph,
  ourPurposeHeading,
  ourPurposeParagraph,
}) => {
  return (
    <div className="container mx-auto my-8 rounded-2xl bg-customSecondary py-2 dark:bg-[#1e232e]">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-8">
        <div className="bg-customSecondary p-10 dark:bg-[#1e232e]">
          <h2 className="mb-2 pt-2 text-xl font-bold text-white md:pt-8">
            {ourValueHeading}
          </h2>
          <p className="text-md pb-2 pt-4 text-white md:pb-8">
            {ourValueParagraph}
          </p>
        </div>
        <div className="relative bg-customSecondary dark:bg-[#1e232e]">
          <div className="absolute bottom-0 left-0 top-0 hidden w-1 bg-white md:block"></div>
          <div className="absolute left-0 top-0 h-1 w-full bg-white md:hidden"></div>
          <div className="p-10 md:pl-8">
            <h2 className="mb-2 pt-2 text-xl font-bold text-white md:pt-8">
              {ourPurposeHeading}
            </h2>
            <p className="text-md pb-2 pt-4 text-white md:pb-8">
              {ourPurposeParagraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValueCard;
