import AboutHero from "@/components/About/AboutHero";
import ImageAndText from "@/components/Cards/ImageAndText";
import ImageAndTextReverse from "@/components/Cards/ImageAndTextReverse";
import OurValueCard from "@/components/Cards/OurValueCard";
import Services from "@/components/Services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PrimeReserved",
  description: "PrimeReserved's about us page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-20 lg:pt-[90px]"></section>
      <AboutHero />
      <section className="lg:px-20">
        <div className="container mx-auto py-8">
          <ImageAndTextReverse
            imageUrl="/images/about/About-2nd-image.jpg"
            header="Our Mission"
            paragraph="PrimeReserved is an innovative IT company with a team of experts
            dedicated to crafting exceptional web solutions. Our goal is to push
            the boundaries of the digital world and redefine the digital
            landscape for our clients."
          />

          <OurValueCard
            ourValueHeading="Our Value"
            ourValueParagraph="At PrimeReserved, our core values of Integrity, 
        Excellence, Innovation, and Collaboration set us apart. 
        We strive to exceed expectations and deliver innovative 
        solutions that surpass our clients' needs."
            ourPurposeHeading="Our Purpose"
            ourPurposeParagraph="To create an IT company that not only solves 
        problems but also pushes the boundaries of 
        what's possible in the digital realm."
          />

          <ImageAndText
            imageUrl="/images/about/About-3rd-image.jpg"
            header="Our Team"
            paragraph="Our team is composed of industry leading experts, including
            developers, designers, project managers, and strategists. We
            confidently tackle complex IT challenges with excellence and are
            always pushing the boundaries to achieve more."
          />
        </div>
      </section>

      <Services />
    </>
  );
};

export default AboutPage;
