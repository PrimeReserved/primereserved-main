import Image from "next/image";
import React from "react";

interface ImageAndTextReverseProps {
  imageUrl: string;
  header: string;
  paragraph: string;
}

const ImageAndTextReverse: React.FC<ImageAndTextReverseProps> = ({
  imageUrl,
  header,
  paragraph,
}) => {
  return (
    <div className="flex flex-col items-center justify-between px-4 py-8 transition duration-300 ease-in-out hover:scale-105 md:flex-row-reverse md:px-8">
      <div className="md:w-1/2">
        <Image
          src={imageUrl}
          alt="Image"
          className="rounded-lg"
          width={500}
          height={400}
        />
      </div>
      <div className="pr-8 pt-4 md:w-1/2 md:max-w-md md:pr-12 md:pt-0">
        <h2 className="mb-4 text-2xl font-bold">{header}</h2>
        <p className="text-gray-600 dark:text-customDarkTextColor">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default ImageAndTextReverse;
