"use client";
import ImageAndTextJustForTeam from "@/components/Cards/ImageAndTextJustForTeam";
import ContactForm from "@/components/Contact/FormHandling/ContactForm";
import TeamHero from "@/components/Team/TeamHero";
import TeamMembers from "@/components/Team/TeamMembers";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Team Page | PrimeReserved",
//   description: "PrimeReserved's meet the team page",
//   // other metadata
// };

// Leaders data
const teamData = [
  {
    name: "Joshua Chris",
    position: "Founder/CEO/COO",
    avatar: "/images/team-images/Joshua.png",
    linkedIn: "https://www.linkedin.com/joshua-chris-ofurunna",
    github: "https://github.com/Joshua-Chris",
    description:
      "Meet Joshua Chris Ofurunna, a passionate solution-driven front-end engineer. With over five years of industry experience, Joshua thrives on exceeding expectations and fostering growth in every project he undertakes. Joshua studied Computer Science at Eastern Polytechnic. Currently serving as the Founder and CEO of PrimeReserved, a dynamic software development company, Joshua leads his team in delivering innovative digital solutions. He is deeply involved in shaping the company's strategic direction, nurturing client relationships, and ensuring project excellence. Under his leadership, PrimeReserved has quickly become a prominent player in the industry, securing key partnerships and contracts. Joshua's passionate about team building and consistent growth, admiring exceptionalism as a core value. 'Hi there! I am a Christian who loves to code, create, and win!'",
  },
  {
    name: "Samuel Archibong",
    position: "Co-founder/CTO/CISO",
    avatar: "/images/team-images/Samuel.png",
    linkedIn: "https://www.linkedin.com/in/archibong-samuel",
    github: "https://github.com/sammiearchie77",
    description:
      "Samuel is proud to be an ALX certified software engineer and ambassador. With a passion for technology and innovation, he has dedicated himself to mastering the art of software development.     Currently, He holds the esteemed position of Chief Technology Officer (CTO), where he leverages his expertise to drive technological advancements and spearhead projects that pushes the boundaries of what's possible. With a commitment to excellence and a drive to make a positive impact, He is excited to continue my journey in the ever-evolving world of technology.",
  },
  {
    name: "Esther Dudu",
    position: "Project/Product Manager",
    avatar: "/images/team-images/Esther.png",
    linkedIn: "https://www.linkedin.com/in/esther-dudu-7a7b7422b/",
    gmail: "duduesther2000@gmail.com",
    description:
      "Hey, you've found a passionate project manager who is in love with seeing projects go smoothly from start to finish ON TIME and WITHIN the given BUDGET. I love to shepherd my projects and guide my team with my impeccable organisational and interpersonal skills. Trust me to manage your projects, foster good and effective communication and also break down barriers. Merci!",
  },
];
const teamMembersData = [
  {
    name: "Patience Emaiku",
    position: "Frontend Engineer",
    avatar: "/images/team-images/Patience.png",
    linkedIn: "https://www.linkedin.com/in/patcodes/",
    gmail: "patienceemaiku@gmail.com",
    description:
      "Patience is a passionate frontend developer, currently crafting experiences at PrimeReserved.",
  },
  {
    name: "Serina Wechie",
    position: "UI/UX Designer",
    avatar: "/images/team-images/Serina.png",
    linkedIn: "https://www.linkedin.com/in/serina-wechie-196abb246/",
    gmail: "serinawechie@gmail.com",
    behance: "https://www.behance.net/serinawechie",
    description:
      "Serina is a passionate UI/UX designer with a keen eye for crafting seamless digital experiences. With a blend of creativity and technical expertise, Serina strives to design interfaces that not only look stunning but also intuitively guide users towards their goals. She believes in the power of user-centered design to transform ideas into impactful solutions.",
  },
];

const TeamPage = () => {
  return (
    <>
      <div className="relative z-10 overflow-hidden pt-20 lg:pt-[90px]"></div>
      <TeamHero />
      {/* Leadership */}
      <TeamMembers
        // backgroundImage="/background.jpg"
        // backgroundColor="#f5f5f5"
        heading="We are PrimeReserved"
        paragraph="We are prime creators with a reserved passion for exceptionalism and outstanding excellence."
        members={teamData}
      />
      {/* Team Members */}
      <div className="mt-[-5rem]">
        <TeamMembers
          // heading="We are PrimeReserved"
          // paragraph="We are prime creators with a reserved passion for exceptionalism and outstanding excellence."
          members={teamMembersData}
        />
      </div>

      <div className="container mx-auto block py-8 dark:hidden">
        <ImageAndTextJustForTeam
          imageUrl="/images/team-images/endSectionIllustration.svg"
          header="Together We Shape the Future of Technology"
          paragraph="Reach out to us today and be a part of our journey toward a brighter tomorrow."
        />
      </div>

      <div className="container mx-auto hidden py-8 dark:block">
        <ImageAndTextJustForTeam
          imageUrl="/images/team-images/newUploads/endIllustrationDarkMode.svg"
          header="Together We Shape the Future of Technology"
          paragraph="Reach out to us today and be a part of our journey toward a brighter tomorrow."
        />
      </div>
      <ContactForm />
    </>
  );
};

export default TeamPage;
