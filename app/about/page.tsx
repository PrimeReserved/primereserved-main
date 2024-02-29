import AboutHero from "@/components/About/AboutHero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PrimeReserved",
  description: "PrimeReserved's about us page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutHero />
    </>
  );
};

export default AboutPage;
