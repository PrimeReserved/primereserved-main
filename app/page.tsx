import React from "react";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import { Metadata } from "next";
import FAQs from "@/components/FAQs/FAQs";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import ImageCardOne from "@/components/Cards/ImageCardOne";
import ImageCardTwo from "@/components/Cards/ImageCardTwo";
import ImageBannerTwo from "@/components/Common/ImageBannerTwo";
import ImageBanner from "@/components/Common/ImageBanner";

export const metadata: Metadata = {
  title:
    "Welcome to PrimeReserved—Your Ultimate Destination for Exceptional Website Designs and Seamless Web Application Developments",
  description: "Your satisfaction is our prime reserve!",
  // other metadata
};

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

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ImageBanner />
      <Services />
      <ImageCardOne />
      <ClientReviews testimonials={testimonials} />
      <Brands />
      <ImageCardTwo />
      <ImageBannerTwo />
      <FAQs />
      <ContactForm />
    </>
  );
}
