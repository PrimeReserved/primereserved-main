"use client";
import React, { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const ClientReviews: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Working with PrimeReserved was a game changer for our business. Their team of skilled developers demonstrated exceptional professionalism, a keen understanding of our needs, and a commitment to delivering top-notch solutions. The communication was seamless, and the final product exceeded our expectations. PrimeReserved is our go-to choice for reliable and innovative software development.",
      image: "/images/testimonials/david.JPG",
      name: "Mr David Wills",
      position: "Software Engineer | SwiftPay",
      location: "Benin Republic",
    },
    {
      quote:
        "We've had a fantastic experience working with PrimeReserved. Their attention to detail, commitment to quality, and prompt communication made the entire development process smooth and efficient. We highly recommend their services to anyone looking for top-notch software solutions.",
      image: "/images/testimonials/liberty.jpeg",
      name: "Ms Sarah Johnson",
      position: "Product Manager | TechWise",
      location: "United States",
    },
    {
      quote:
        "PrimeReserved exceeded our expectations with their exceptional software development services. From concept to delivery, their team demonstrated expertise, creativity, and professionalism. They truly understand our business needs and deliver innovative solutions that drive results.",
      image: "/images/testimonials/liberty.jpeg",
      name: "Mr Michael Brown",
      position: "CEO | DigitalSolutions",
      location: "Canada",
    },
    {
      quote:
        "Working with PrimeReserved was a delightful experience. Their team is highly skilled, dedicated, and customer-oriented. They not only delivered a high-quality software solution but also provided valuable insights and recommendations throughout the process. We look forward to collaborating with them on future projects.",
      image: "/images/testimonials/liberty.jpeg",
      name: "Ms Emily White",
      position: "CTO | CodeCrafters",
      location: "Australia",
    },
    {
      quote:
        "PrimeReserved delivered exactly what we needed and more. Their professionalism, expertise, and commitment to customer satisfaction are commendable. We are extremely satisfied with the outcome of our project and would gladly recommend their services to others.",
      image: "/images/testimonials/david.JPG",
      name: "Mr John Smith",
      position: "Head of IT | TechHub",
      location: "United Kingdom",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3, // Show 1 box at a time on mobile, 3 boxes at a time on desktop
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: !isMobile, // Hide arrow icons on mobile
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section className="w-full py-12">
      <div className="container relative mx-auto">
        {!isMobile && (
          <React.Fragment>
            <button
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-primary p-2 text-white focus:outline-none"
              onClick={handlePrev}
            >
              <FaChevronLeft className="text-4xl" />
            </button>
            <button
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-primary p-2 text-white focus:outline-none"
              onClick={handleNext}
            >
              <FaChevronRight className="text-4xl" />
            </button>
          </React.Fragment>
        )}

        <div className="mb-16 text-left">
          <p className="py-2 text-lg font-bold text-primary">CLIENT REVIEWS</p>
          <h2 className="py-2 text-3xl font-bold">
            See What Our Clients Say About Us!
          </h2>
        </div>

        <div className="overflow-hidden">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialBox key={index} {...testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

interface Testimonial {
  quote: string;
  image: string;
  name: string;
  position: string;
  location: string;
}

interface TestimonialBoxProps extends Testimonial {}

const TestimonialBox: React.FC<TestimonialBoxProps> = ({
  quote,
  image,
  name,
  position,
  location,
}) => {
  return (
    <div className="mx-4 w-full max-w-lg flex-shrink-0 items-start space-x-2 rounded-lg border border-gray-200 p-2">
      <FaQuoteLeft className="my-8 ml-3 text-3xl text-gray-600 dark:text-white" />
      <p className="mb-8 text-sm text-black dark:text-customDarkTextColor">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt="Client Image"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-sm text-gray-600 dark:text-customDarkTextColor">
            {position}
          </p>
          <p className="text-sm text-gray-600 dark:text-customDarkTextColor">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
