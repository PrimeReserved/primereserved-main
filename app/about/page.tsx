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
        <div className="container mx-auto pt-8">
          <ImageAndTextReverse
            imageUrl="/images/about/About-2nd-image.jpg"
            header="Our Vision"
            paragraph="Empowering Innovation, PrimeReserved envisions a world where cutting-edge technology transforms possibilities into realities, driving progress and excellence across industries."
          />

          <OurValueCard
            ourValueHeading="Our Core Values"
            ourValueParagraph={
              <span>
                <p className="my-2 border-l-4 border-primary px-2 font-semibold">
                  Integrity:
                </p>
                Integrity is at the core of everything we do. We uphold the
                highest ethical standards, building trust with clients,
                partners, and our team.
                <p className="my-2 border-l-4 border-primary px-2 font-semibold">
                  Client-Centric Approach:
                </p>
                Our success is tied to the success of our clients. We prioritize
                understanding their needs and delivering tailored, high-quality
                solutions that drive tangible results.
              </span>
            }
            ourPurposeHeading="Our Mission"
            ourPurposeParagraph={
              <span>
                <p>
                  At PrimeReserved, our mission is to craft exceptional user
                  experiences and engaging digital content that propel
                  businesses forward. Through collaborative partnerships and
                  continuous innovation, we strive to exceed client
                  expectations, ensuring sustainable growth and a lasting impact
                  on the global tech landscape.
                </p>
                <span className="text-sm">
                  <p className="my-2 border-l-4 border-primary px-2 font-semibold">
                    Innovation:
                  </p>
                  We foster a culture of continuous learning and creativity,
                  embracing challenges as opportunities to pioneer
                  groundbreaking solutions.
                </span>
              </span>
            }
          />

          <ImageAndText
            imageUrl="/images/about/About-3rd-image.jpg"
            header="Our Team"
            paragraph="Here at PrimeReserved, we love what we do! We are a rare combination of great minds. From the software engineering and development department, to the product and design department, etc, we are driven by a unified vision and passion. Our exceptionalism truly comes from having one mind as a team—an outstanding conglutinated team here at PrimeReserved."
          />
        </div>
      </section>

      <div className="pt-[-20px]">
        <Services />
      </div>
    </>
  );
};

export default AboutPage;
