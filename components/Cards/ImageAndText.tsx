import React from "react";
import Image from "next/image";

interface ImageAndTextProps {
  imageUrl: string;
  header: string;
  paragraph: string;
}

const ImageAndText: React.FC<ImageAndTextProps> = ({
  imageUrl,
  header,
  paragraph,
}) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-4 md:py-4">
      <div className="md:w-1/2">
        <Image
          src={imageUrl}
          alt="Image"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="py-4 md:w-1/2 md:max-w-md md:py-0">
        <h2 className="mb-2 text-xl font-bold">{header}</h2>
        <p className="leading-relaxed text-gray-600">{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageAndText;
