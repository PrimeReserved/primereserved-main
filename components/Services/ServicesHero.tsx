import React from "react";
import IconButton from "../Buttons/IconButton";
import BtnArrowIcon from "../Buttons/BtnArrowIcon";

const ServicesHero: React.FC = () => {
  return (
    <div
      className="relative flex h-96 items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('/images/services-images/herodesktop.png')",
      }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
        {/* Text Content */}
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
        <p className="text-md my-6 text-white md:text-2xl">
          Experience a seamless engagement, if you let us revamp your idea
        </p>
        <IconButton text="Contact us now" icon={<BtnArrowIcon />} />
      </div>
    </div>
  );
};

export default ServicesHero;
