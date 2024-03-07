import React from "react";
import IconButton from "../Buttons/IconButton";
import BtnArrowIcon from "../Buttons/BtnArrowIcon";
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
    <div className="flex flex-col px-4 py-8 md:flex-row md:px-8 md:py-12">
      <div className="md:w-1/2">
        <Image src={imageSrc} alt="Image" width={500} height={500} />
      </div>
      <div className="flex flex-col justify-center md:w-1/2 md:pl-8">
        <p className="mb-6 text-lg">{paragraph}</p>
        <IconButton
          text="Speak with an expert"
          href="https://calendly.com/primereserve/websiteprojectcall"
          icon={<BtnArrowIcon />}
        />
      </div>
    </div>
  );
};

export default ImageTextButton;
