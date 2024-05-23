import React from "react";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
<<<<<<< HEAD
import ContactForm from "@/components/Contact/FormHandling/ContactForm";
=======
import ContactForm from "@/components/Contact/ContactForm/ContactForm";
>>>>>>> 38900fa (Feature/frontend UI update (#3))
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
    image: "/images/testimonials/davidAvatar.PNG",
    name: "Mr David Wills",
    position: "Software Engineer | SwiftPay",
    location: "Benin Republic",
  },
  {
    quote:
      "I must say that our organization's collaboration with PrimeReserved was the best decision we made. Their services are top-notch and inspiring. The capabilities of our staff in discharging their responsibilities have improved significantly. I strongly recommend them for all tech-related services.",
    image: "/images/testimonials/liberty.PNG",
    name: "Mr Liberty Amaechi",
    position: "Team Lead | Author Energy Ltd.",
    location: "Nigeria",
  },
  {
    quote:
      "PrimeReserved delivered exactly what we needed and more. Their professionalism, expertise, and commitment to customer satisfaction are commendable. We are extremely satisfied with the outcome of our project and would gladly recommend their services to others.",
    image: "/images/testimonials/user.png",
    name: "Mr John",
    position: "IT Specialist",
    location: "Nigeria",
  },
  {
    quote:
      "Our collaboration with PrimeReserved has been outstanding. Their team's dedication and expertise have greatly contributed to our project's success. We're impressed by their innovative solutions and timely support. PrimeReserved comes highly recommended for anyone in need of reliable tech services.",
    image: "/images/testimonials/user.png",
    name: "Mr Chris",
    position: "Project Manager",
    location: "Nigeria",
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
