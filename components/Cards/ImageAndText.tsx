import Image from "next/image";
import React from "react";

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
    <div className="flex flex-col items-center justify-between px-4 py-8 md:flex-row md:px-8">
      <div className="md:w-1/2">
        <Image
          src={imageUrl}
          alt="Image"
          className="rounded-lg"
          width={500}
          height={400}
        />
      </div>
      <div className="pl-0 md:w-1/2 md:max-w-md md:pl-8 pt-4 md:pt-0">
        <h2 className="mb-4 text-2xl font-bold">{header}</h2>
        <p className="text-gray-600">{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageAndText;
