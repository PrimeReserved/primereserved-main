import React from "react";

const AboutHero: React.FC = () => {
  return (
    <div
      className="relative flex h-96 items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto,w_1920/v1744048642/AboutHeroSection_yqhoj6.png')" }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        {/* Text Content */}
        <h1 className="text-4xl font-bold text-white">About Us</h1>
      </div>
    </div>
  );
};

export default AboutHero;
