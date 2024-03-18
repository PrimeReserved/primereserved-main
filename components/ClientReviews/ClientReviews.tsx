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
        <div className="flex w-full flex-col">
          <p className="py-2 text-lg font-bold text-primary">CLIENT REVIEWS</p>
          <div className="flex w-full items-center justify-between">
            <h2 className="py-2 text-xl font-bold md:text-3xl">
              See What Our Clients Say About Us!
            </h2>
            <div className="space-x-4 md:flex" hidden>
              <span
                className="cursor-pointer rounded-full bg-primary p-4"
                onClick={scrollLeft}
              >
                <FaArrowLeft className="text-md h-5 w-5 cursor-pointer rounded-lg font-light text-white" />
              </span>
              <span
                className="cursor-pointer rounded-full bg-primary p-4"
                onClick={scrollRight}
              >
                <FaArrowRight className="text-md h-5 w-5 cursor-pointer rounded-lg font-light text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={`hide-scrollbar flex overflow-x-auto`}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`mx-4 flex h-[500px] flex-shrink-0 flex-col items-start justify-evenly space-y-1 rounded-lg border border-gray-200 p-4 lg:h-[380px] ${
              index >= currentIndex && index < currentIndex + itemsPerPage
                ? "md:flex"
                : "hidden"
            }`}
            style={{ minWidth: "250px", maxWidth: "calc(33.333% - 1rem)" }} // Adjusted widths
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
                style={{
                  textAlign: "center",
                  borderRadius: "50%",
                  minHeight: "50px",
                }}
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
