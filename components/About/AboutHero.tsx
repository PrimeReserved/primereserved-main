import React from "react";

const AboutHero: React.FC = () => {
  return (
    <div
      className="relative flex h-96 items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/about/AboutHeroSection.jpg')" }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Text Content */}
      <h1 className="text-4xl font-bold text-white">About Us</h1>
    </div>
  );
};

export default AboutHero;
