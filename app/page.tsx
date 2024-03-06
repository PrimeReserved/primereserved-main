import React from "react";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import ContactForm from "@/components/Contact/ContactForm.tsx/ContactForm";
import { Metadata } from "next";
import FAQs from "@/components/FAQs/FAQs";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import ImageCardOne from "@/components/Cards/ImageCardOne";
import ImageCardTwo from "@/components/Cards/ImageCardTwo";
import ImageBannerTwo from "@/components/Common/ImageBannerTwo";
import ImageBanner from "@/components/Common/ImageBanner";
import CookieConsent from "@/components/Utils/CookieConsent";

export const metadata: Metadata = {
  title:
    "Welcome to PrimeReserved—Your Ultimate Destination for Exceptional Website Designs and Seamless Web Application Developments",
  description: "Your satisfaction is our prime reserve!",
  // other metadata
};

export default function Home() {
  return (
    <>
      <CookieConsent />
      <ScrollUp />
      <Hero />
      <ImageBanner />
      <Services />
      <ImageCardOne />
      <ClientReviews />
      <Brands />
      <ImageCardTwo />
      <ImageBannerTwo />
      <FAQs />
      <ContactForm />
    </>
  );
}
