"use client";
import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ClientReviews: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Working with PrimeReserved was a game changer for our business. Their team of skilled developers demonstrated exceptional professionalism, a keen understanding of our needs, and a commitment to delivering top-notch solutions. The communication was seamless, and the final product exceeded our expectations. PrimeReserved is our go-to choice for reliable and innovative software development.",
      image: "/images/testimonial1.jpg",
      name: "Mr David Wills",
      position: "Software Engineer | SwiftPay",
      location: "Benin Republic",
    },
    {
      quote:
        "We've had a fantastic experience working with PrimeReserved. Their attention to detail, commitment to quality, and prompt communication made the entire development process smooth and efficient. We highly recommend their services to anyone looking for top-notch software solutions.",
      image: "/images/testimonial2.jpg",
      name: "Ms Sarah Johnson",
      position: "Product Manager | TechWise",
      location: "United States",
    },
    {
      quote:
        "PrimeReserved exceeded our expectations with their exceptional software development services. From concept to delivery, their team demonstrated expertise, creativity, and professionalism. They truly understand our business needs and deliver innovative solutions that drive results.",
      image: "/images/testimonial3.jpg",
      name: "Mr Michael Brown",
      position: "CEO | DigitalSolutions",
      location: "Canada",
    },
    {
      quote:
        "Working with PrimeReserved was a delightful experience. Their team is highly skilled, dedicated, and customer-oriented. They not only delivered a high-quality software solution but also provided valuable insights and recommendations throughout the process. We look forward to collaborating with them on future projects.",
      image: "/images/testimonial4.jpg",
      name: "Ms Emily White",
      position: "CTO | CodeCrafters",
      location: "Australia",
    },
    {
      quote:
        "PrimeReserved delivered exactly what we needed and more. Their professionalism, expertise, and commitment to customer satisfaction are commendable. We are extremely satisfied with the outcome of our project and would gladly recommend their services to others.",
      image: "/images/testimonial5.jpg",
      name: "Mr John Smith",
      position: "Head of IT | TechHub",
      location: "United Kingdom",
    },
    // Add more testimonials here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className="w-full bg-white py-12">
      <div className="container mx-auto">
        <div className="mb-8 text-left">
          <p className="text-lg font-bold text-primary">CLIENT REVIEWS</p>
          <h2 className="text-3xl font-bold">
            See What Our Clients Say About Us!
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex items-center space-x-4">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 transform focus:outline-none"
              onClick={handlePrev}
            >
              <FiChevronLeft className="text-4xl text-primary" />
            </button>
            <TestimonialBox {...testimonials[currentIndex]} />
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 transform focus:outline-none"
              onClick={handleNext}
            >
              <FiChevronRight className="text-4xl text-primary" />
            </button>
          </div>
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

const TestimonialBox: React.FC<Testimonial> = ({
  quote,
  image,
  name,
  position,
  location,
}) => {
  return (
    <div className="mx-auto w-full max-w-lg flex-col items-start space-x-4 rounded-lg border border-gray-200 p-6">
      <FaQuoteLeft className="text-4xl text-primary" />
      <p className="flex-1 text-lg text-gray-800">{quote}</p>
      <div className="flex items-center">
        <Image
          src={image}
          alt="Client Image"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="flex flex-col items-center">
          <p className="text-lg font-bold">{name}</p>
          <p className="text-sm text-gray-600">{position}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
