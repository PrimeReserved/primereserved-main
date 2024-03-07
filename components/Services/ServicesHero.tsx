import React from "react";
import IconButton from "../Buttons/IconButton";
import BtnArrowIcon from "../Buttons/BtnArrowIcon";

interface ServicesHeroProps {
  backgroundImage: string;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({ backgroundImage }) => {
  return (
    <div
      className="relative flex h-screen flex-col items-start justify-center bg-cover bg-center bg-no-repeat px-[6rem]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <h1 className="mb-4 text-4xl font-bold text-white">Our Services</h1>
        <p className="mb-6 text-2xl text-white">
          Experience a seamless engagement, if you let us revamp your idea
        </p>
        <IconButton
          text="Contact us now"
          href="https://calendly.com/primereserve/websiteprojectcall"
          icon={<BtnArrowIcon />}
        />
      </div>
    </div>
  );
};

export default ServicesHero;
