import React from "react";
import IconButton from "../Buttons/IconButton";
import Image from "next/image";

interface ImageTextButtonProps {
  imageSrc: string;
  paragraph: string;
}

const ImageTextButton: React.FC<ImageTextButtonProps> = ({
  imageSrc,
  paragraph,
}) => {
  return (
    <div className="flex flex-col items-center px-4 py-8 md:flex-row md:px-8 md:py-12">
      <div className="flex-1 p-4">
        <Image src={imageSrc} alt="Image" width={500} height={500} />
      </div>
      <div className="flex-1 p-4">
        <p className="mb-6 text-lg">{paragraph}</p>
        <IconButton text="Speak with an expert" icon={false} />
      </div>
    </div>
  );
};

export default ImageTextButton;
