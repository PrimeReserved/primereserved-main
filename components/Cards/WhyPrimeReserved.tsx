"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const WhyPrimeReserved = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const boxesData = [
    {
      heading: "Specialization",
      paragraph:
        "Our services as displayed here on our website are our specialty. We derive great joy from helping our clients; individuals and businesses of different sizes, bring their projects to life as this helps us live out our mission and vision remarkably.",
    },
    {
      heading: "Premium Support",
      paragraph:
        "We are an amazing team with a great wealth of experience over the years, and we know the power of excellent and consistent support. We provide that, admire it, and endorse it. This makes us exceptional at providing outstanding support to our clients.",
    },
    {
      heading: "User Centric",
      paragraph:
        "Beyond the fact that there's a lot to consider when building a product, we cannot overemphasize the importance of your users' needs. It's highly important and we give it our A-game.",
    },
    {
      heading: "Innovative Solutions",
      paragraph:
        "We constantly strive to provide innovative solutions tailored to the unique needs of our clients. Our team is dedicated to staying updated with the latest technologies and trends to deliver cutting-edge solutions.",
    },
    {
      heading: "Customer Satisfaction",
      paragraph:
        "Our primary focus is customer satisfaction. We go above and beyond to ensure that our clients are happy with our services. Your success is our success. And we also say 'Your satisfaction is our prime reserve!'",
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
            className={`mx-2 flex w-64 transform flex-col justify-center rounded-lg bg-white p-6 text-black shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:text-white ${
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
