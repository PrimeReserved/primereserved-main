"use client";
import React, { useRef, useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  location: string;
  image: string;
}

interface ClientReviewsProps {
  testimonials: Testimonial[];
}

const ClientReviews: React.FC<ClientReviewsProps> = ({ testimonials }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - 1,
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - itemsPerPage ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="w-full overflow-x-hidden p-8 md:p-16">
      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
      <div className="mb-4 flex flex-row items-center justify-between md:p-8">
        <div className="flex flex-col">
          <p className="text-md font-bold text-primary md:text-2xl">
            CLIENT REVIEWS
          </p>
          <h2 className="text-lg font-bold text-white md:text-3xl">
            See What Our Clients Say About Us!
          </h2>
        </div>
        <div className="flex space-x-4">
          <FaArrowLeft
            onClick={scrollLeft}
            className="text-md h-8 w-10 cursor-pointer rounded-lg bg-primary text-white"
          />
          <FaArrowRight
            onClick={scrollRight}
            className="text-md h-8 w-10 cursor-pointer rounded-lg bg-primary text-white"
          />
        </div>
      </div>
      <div className={`hide-scrollbar flex overflow-x-auto`}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`mx-4 flex flex-shrink-0 flex-col items-start space-y-4 rounded-lg border border-gray-200 p-4 ${
              index >= currentIndex && index < currentIndex + itemsPerPage
                ? "md:flex"
                : "hidden"
            }`}
            style={{ minWidth: "300px", maxWidth: "calc(33.333% - 1rem)" }} // Adjusted widths
          >
            <FaQuoteLeft className="text-3xl text-gray-600 dark:text-white" />
            <p className="text-sm text-black dark:text-customDarkTextColor">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.image}
                alt="Client Image"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-sm font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-customDarkTextColor">
                  {testimonial.position}
                </p>
                <p className="text-sm text-gray-600 dark:text-customDarkTextColor">
                  {testimonial.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
