"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const WhyPrimeReserved = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const boxesData = [
    {
      heading: "Smart",
      paragraph:
        "With our knowledge on Specificity, Measurable, Attenable, Relevant and Time bound, be assured of getting nothing but the best from our team of Experts. Delivering within time frame and making sure the best is what you get, makes us unique.",
    },
    {
      heading: "Best Relationship With Clients",
      paragraph:
        "Primereserved is interested in creating one of the best relationships with their clients. In the field of business, our clients receives the best attention as their comfort is our topmost priority.",
    },
    {
      heading: "User Centric",
      paragraph:
        "Primereserved is interested in creating one of the best relationships with their clients. In the field of business, our clients receives the best attention as their comfort is our topmost priority.",
    },
    {
      heading: "Innovative Solutions",
      paragraph:
        "We constantly strive to provide innovative solutions tailored to the unique needs of our clients. Our team is dedicated to staying updated with the latest technologies and trends to deliver cutting-edge solutions.",
    },
    {
      heading: "Customer Satisfaction",
      paragraph:
        "Our primary focus is customer satisfaction. We go above and beyond to ensure that our clients are happy with our services. Your success is our success.",
    },
    {
      heading: "Reliable Support",
      paragraph:
        "We provide reliable support to our clients throughout their journey with us. Our dedicated team is always available to address any issues and provide assistance whenever needed.",
    },
    // Add more boxes here
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? boxesData.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === boxesData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex h-auto items-center justify-center">
        {boxesData.map((box, index) => (
          <div
            key={index}
            className={`mx-2 flex w-64 transform flex-col justify-center rounded-lg bg-white p-6 text-black shadow-lg transition duration-300 ease-in-out hover:scale-105 ${
              index >= currentIndex && index < currentIndex + 3 ? "" : "hidden"
            }`}
            style={{ minWidth: "300px", height: "400px", zIndex: 1 }}
          >
            <h3 className="mb-4 text-center text-lg font-bold">
              {box.heading}
            </h3>
            <p className="text-center text-base leading-6">{box.paragraph}</p>
          </div>
        ))}
      </div>
      <button
        className="absolute left-10 top-1/2 z-10 -translate-y-1/2 transform focus:outline-none"
        onClick={handlePrev}
      >
        <FaChevronLeft className="text-3xl text-gray-500" />
      </button>
      <button
        className="absolute right-10 top-1/2 z-10 -translate-y-1/2 transform focus:outline-none"
        onClick={handleNext}
      >
        <FaChevronRight className="text-3xl text-gray-500" />
      </button>
    </div>
  );
};

export default WhyPrimeReserved;
