// components/OurValueCard.tsx

import React from "react";

interface OurValueCardProps {
  ourValueHeading: string;
  ourValueParagraph: string;
  ourPurposeHeading: string;
  ourPurposeParagraph: string;
}

const OurValueCard: React.FC<OurValueCardProps> = ({
  ourValueHeading,
  ourValueParagraph,
  ourPurposeHeading,
  ourPurposeParagraph,
}) => {
  return (
    <div className="container mx-auto my-8 rounded-2xl bg-customSecondary py-2">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-8">
        <div className="bg-customSecondary p-10">
          <h2 className="mb-2 pt-8 text-xl font-bold text-white">
            {ourValueHeading}
          </h2>
          <p className="pb-8 text-sm text-white">{ourValueParagraph}</p>
        </div>
        <div className="relative bg-customSecondary">
          <div className="absolute bottom-0 left-0 top-0 hidden w-1 bg-white md:block"></div>
          <div className="absolute left-0 top-0 h-1 w-full bg-white md:hidden"></div>
          <div className="p-10 md:pl-8">
            <h2 className="mb-2 pt-8 text-xl font-bold text-white">
              {ourPurposeHeading}
            </h2>
            <p className="pb-8 text-sm text-white">{ourPurposeParagraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValueCard;
