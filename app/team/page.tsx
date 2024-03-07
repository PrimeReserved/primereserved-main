"use client";
import ImageAndText from "@/components/Cards/ImageAndText";
import ContactForm from "@/components/Contact/ContactForm.tsx/ContactForm";
import TeamHero from "@/components/Team/TeamHero";
import TeamMembers from "@/components/Team/TeamMembers";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Team Page | PrimeReserved",
//   description: "PrimeReserved's meet the team page",
//   // other metadata
// };

// Leaders data
const leadersData = [
  {
    name: "Joshua Chris",
    position: "Founder/CEO/COO",
    avatar: "/images/team-images/Joshua.png",
    linkedIn: "https://www.linkedin.com/joshua-chris-ofurunna",
    description:
      "Meet Joshua Chris Ofurunna, a passionate solution-driven front-end developer based in Port Harcourt, Nigeria. With over five years of industry experience, Joshua thrives on exceeding expectations and fostering growth in every project he undertakes. Joshua studied Computer Science at Eastern Polytechnic. Currently serving as the Founder and CEO of PrimeReserved, a dynamic software development company, Joshua leads his team in delivering innovative digital solutions. He is deeply involved in shaping the company's strategic direction, nurturing client relationships, and ensuring project excellence. Under his leadership, PrimeReserved has quickly become a prominent player in the industry, securing key partnerships and contracts.Joshua's expertise extends beyond his role at PrimeReserved. Previously, as a Web Developer at Voisip Telecommunications Limited, he revamped the company's website, managed online platforms, spearheaded client interactions, and collaborated with teams to achieve project objectives. His freelance work showcases his versatility, having delivered tailored websites and applications across sectors such as Oil and Gas, Healthcare, Job Recruitment, Education, etc.Working with the team at PrimeReserved is refreshing for Joshua. He's passionate about team building and consistent growth, admiring exceptionalism as a core value. 'Hi there! I am a Christian who loves to code, create, and win!'",
  },
  {
    name: "Samuel Archibong",
    position: "Co-founder/CTO/CISO",
    avatar: "/images/team-images/Samuel.png",
    linkedIn: "https://www.linkedin.com/joshua-chris-ofurunna",
    github: "https://github.com/joshua",
    description:
      "Samuel is proud to be an ALX certified software engineer and ambassador. With a passion for technology and innovation, he has dedicated himself to mastering the art of software development.     Currently, He holds the esteemed position of Chief Technology Officer (CTO), where he leverages his expertise to drive technological advancements and spearhead projects that pushes the boundaries of what's possible. With a commitment to excellence and a drive to make a positive impact, He is excited to continue my journey in the ever-evolving world of technology.",
  },
  {
    name: "Esther Dudu",
    position: "Project/Product Manager",
    avatar: "/images/team-images/Oluwaseun.png",
    linkedIn: "https://www.linkedin.com/joshua-chris-ofurunna",
    gmail: "joshua@example.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper.",
  },
];

// Designers data
const designersData = [
  {
    name: "Jennifer Ayogu",
    position: "UI/UX Designer",
    avatar: "/images/team-images/Jennifer.png",
    linkedIn: "https://www.linkedin.com/in/jennifer-ayogu-7929bb233/",
    gmail: "ayogujennifer6@gmail.com",
    behance: "https://www.behance.net/ayogujennifer",
    description:
      "Jennifer is a product designer with 2 years of experience. She possesses a strong passion for creating innovative and user-centric products that effectively address real-world issues. With her expertise in user research, interaction design, and prototyping, Jennifer is capable of crafting intuitive and delightful user experiences. She exhibits a profound understanding of design thinking methodologies and has successfully guided numerous design projects from the initial concept to the final launch.Jennifer has collaborated with cross-functional teams, working alongside product managers, engineers, and marketers, to develop products that harmonize with both business objectives and user requirements. Her proficiency in utilizing design tools such as Adobe Creative Suite, Sketch, Figma, and others empowers her to produce high-fidelity designs and prototypes.As a designer, Jennifer is constantly seeking fresh challenges and opportunities for personal growth. She eagerly looks forward to leveraging her skills and experience within a dynamic team, where she can contribute to the creation of exceptional products.",
  },
  {
    name: "Miracle Okah",
    position: "UI/UX Designer",
    avatar: "/images/team-images/Miracle.png",
    linkedIn: "https://www.linkedin.com/in/miracleokah/",
    gmail: "okahmiracle070@gmail.com",
    behance: "https://www.behance.net/miracleokah1",
    description:
      "Miracle is an experienced UI/UX designer who is particular about creating designs that cater to users' specific needs. She achieves this by conducting thorough research and creating visually appealing, user-friendly interfaces. Additionally, she has extensive experience as a content writer. Her expertise includes researching and writing articles on various topics such as Women, Tech, Mental Health, Society, Culture, and Politics. She also has basic SEO knowledge, allowing her to write eye-catching headlines and well-organized, understandable tech content.",
  },
  {
    name: "Ngozi Emmanuel",
    position: "UI/UX Designer",
    avatar: "/images/team-images/Ngozi.png",
    linkedIn: "https://www.linkedin.com/in/ngozi-emmanuel-908764253/",
    gmail: "njeez07ten@gmail.com",
    behance: "https://www.behance.net/ngozitemmanue",
    description:
      "Ngozi is a resilient and passionate designer who is interested in creating visually appealing and used friendly designs. She is problem solver who enjoys agile working routine and finds pleasure in playing with new ideas for the sake of creativity. She is a bit of a loner with heavy sense of humor. 'In case you don't see any of these, you're yet to meet me.",
  },
  {
    name: "Oluwaseun Alabi",
    position: "UI/UX Designer",
    avatar: "/images/team-images/Oluwaseun.png",
    linkedIn: "www.linkedin.com/in/oluwaseun-alabi",
    gmail: "oluwaseunalabi2001@gmail.com",
    behance: "https://www.behance.net/oluwaseunalabi1",
    description:
      "Oluwaseun is passionate and adaptable professional exploring diverse avenues in product design and business development.With an inclination for problem-solving and a genuine love for learning, She has honed skills in data analysis, product design, product management, sales and marketing, seeking to broaden her skill set and understanding of business dynamics. While she has knowledge in software engineering, her true passion lies in idealizing and designing innovative solutions rather than coding.She is open to exploring new career opportunities in product design and beyond, embracing challenges with a growth mindset. With her diverse career from finance to sales to product, her adaptability, intellect, proactive nature and a hunger for learning, She is ready to tackle diverse roles and industries.Ultimately, she aspires to lead and inspire change as a CEO, contributing to solutions for global challenges one step at a time.",
  },
];

// Developers data
const developersData = [
  {
    name: "Chinedu Amaechi",
    position: "Web Developer",
    avatar: "/images/team-images/Chinedu.png",
    gmail: "chineduamaechi52@gmail.com",
    description:
      "As a passionate full-stack developer with a focus on Django, Chinedu brings a unique blend of technical expertise and creative flair to every project. From designing intuitive user interfaces to constructing scalable back-end systems, he thrives on bringing ideas to life and delivering exceptional digital experiences.He is proficient in both front-end and back-end technologies, he leverages Django's powerful features alongside modern JavaScript frameworks like React to build end-to-end web solutions.He is experienced in integrating third-party APIs and services and ensures seamless communication between front-end and back-end components, enabling rich and interactive functionality.He is also skilled in deploying and maintaining Django applications using best DevOps practices, including containerization, continuous integration, and automated testing.",
  },
  {
    name: "Pascal Ogbonna",
    position: "Mobile/Web Developer",
    avatar: "/images/team-images/Pascal.png",
    gmail: "paschalophyxial@gmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper.",
  },
  {
    name: "Promise Onyenwe",
    position: "Web Developer",
    avatar: "/images/team-images/Promise.png",
    gmail: "pchike2004@gmail.com",
    description:
      "With a passion for crafting robust backend solutions, Promise thrives on tackling complex challenges and turning them into elegant, efficient code. As a Django developer, he specializes in building scalable web applications that are not only functional but also maintainable in the long run.He is proficient in Django, excels in creating RESTful APIs and implementing complex business logic to power dynamic web applications.He is also skilled in designing and optimizing database schemas, he ensure seamless data management and retrieval using Django ORM and SQL.Promise is experienced in implementing robust authentication systems and securing Django applications against common vulnerabilities.He is committed to delivering high-performance solutions and finetuning Django applications for speed and scalability, optimizing queries and caching strategies.",
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
        heading="Leadership"
        paragraph="We are the visionaries steering our company's journey towards innovation"
        members={leadersData}
      />
      {/* Design Team */}
      <TeamMembers
        // backgroundImage="/background.jpg"
        heading="Design Team"
        paragraph="We craft digital experiences from concept to creation"
        members={designersData}
      />
      {/* Development Team */}
      <TeamMembers
        // backgroundImage="/background.jpg"
        heading="Development Team"
        paragraph="We craft digital experiences from concept to creation"
        members={developersData}
      />
      <ImageAndText
        imageUrl="/images/team-images/endSectionIllustration.svg"
        header="Together We Shape the 
            Future of Technology"
        paragraph="Reach out to us today and be a part of our journey 
            toward a brighter tomorrow."
      />
      <ContactForm />
    </>
  );
};

export default TeamPage;
