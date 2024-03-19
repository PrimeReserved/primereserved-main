import React from "react";
import IconButton from "../Buttons/IconButton";
import BtnArrowIcon from "../Buttons/BtnArrowIcon";

const ServicesHero: React.FC = () => {
  return (
    <div
      className="relative flex h-96 items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('/images/services-images/herodesktopEdit.png')",
      }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0">
        {/* Text Content */}
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
        <p className="text-md my-6 px-8 text-center text-white md:max-w-2xl md:text-2xl">
          You have found the team to bring your projects to life through a
          structured and seamless process.
        </p>
        <IconButton text="Contact us now" icon={<BtnArrowIcon />} />
      </div>
    </div>
  );
};

export default ServicesHero;
