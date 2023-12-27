import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PrimeReserved",
  description: "PrimeReserved's about us page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="At PrimeReserved, our story is one of passion, innovation, and a relentless pursuit of excellence. Founded with the vision of redefining the digital landscape, we bring together a dynamic team of experts dedicated to crafting exceptional web solutions. Learn more about our journey and the values that drive us in shaping the future of digital innovation."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
