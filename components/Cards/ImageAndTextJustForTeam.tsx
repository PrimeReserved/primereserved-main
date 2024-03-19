import Image from "next/image";
import React from "react";

interface ImageAndTextProps {
  imageUrl: string;
  header: string;
  paragraph: string;
}

const ImageAndTextJustForTeam: React.FC<ImageAndTextProps> = ({
  imageUrl,
  header,
  paragraph,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-8 transition duration-300 ease-in-out hover:scale-105 md:flex-row md:gap-28 md:px-8">
      <div className="md:w-1/2">
        <Image
          src={imageUrl}
          alt="Image"
          className="rounded-lg"
          width={500}
          height={400}
        />
      </div>
      <div className="pl-0 pt-4 md:w-1/2 md:max-w-md md:pt-0">
        <h2 className="mb-4 text-2xl font-bold">{header}</h2>
        <p className="text-md text-gray-600 dark:text-customDarkTextColor md:text-lg">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default ImageAndTextJustForTeam;
