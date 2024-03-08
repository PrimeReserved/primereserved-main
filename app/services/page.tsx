import CenteredHeading from "@/components/Cards/CenteredHeadingProps";
import DesignFlow from "@/components/Cards/DesignFlow";
import ImageAndText from "@/components/Cards/ImageAndText";
import ImageAndTextReverse from "@/components/Cards/ImageAndTextReverse";
import ImageTextButton from "@/components/Cards/ImageTextButton";
import ContactForm from "@/components/Contact/ContactForm.tsx/ContactForm";
import ServicesHero from "@/components/Services/ServicesHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page | PrimeReserved",
  description: "PrimeReserved's Services page",
  // other metadata
};

const boxesData = [
  {
    heading: "User Research",
    paragraph:
      "To ensure your app meets users' expectations, we do in-depth user research to understand their needs, desires, and pain points as well as your competitors' magic fingers.",
    backgroundColor: "customBg",
    textColor: "black",
  },
  {
    heading: "Information Architecture",
    paragraph:
      "With I.A your mobile app's navigation and user journey should be smooth and seamless.",
    backgroundColor: "customSecondary",
    textColor: "white",
  },
  {
    heading: "UI/UX Design",
    paragraph:
      "Your users want a seamless and user-centric experience. Our comprehensive interface and experience design experts deliver more than your expectations.",
    backgroundColor: "customBg",
    textColor: "black",
  },
  {
    heading: "Visual Identity",
    paragraph:
      "Your mobile app must be understandable and accessible by your users. Our visual identity design achieves that and more.",
    backgroundColor: "customSecondary",
    textColor: "white",
  },
  {
    heading: "Develop",
    paragraph:
      "Understand that we work with your idea, however, enhanced by our team of experts to provide you the best result, ready for use.",
    backgroundColor: "customBg",
    textColor: "black",
  },
  {
    heading: "Usability Testing",
    paragraph:
      "To enhance the user experience of your mobile app, we critically evaluate the user journey with care, identifying areas of improvement.",
    backgroundColor: "customSecondary",
    textColor: "white",
  },
];

const ServicesPage = () => {
  return (
    <>
      <div className="relative z-10 overflow-hidden pt-20 lg:pt-[90px]"></div>
      <ServicesHero />
      <section className="lg:px-20">
        <ImageTextButton
          imageSrc="/images/services-images/aboutOurServices.png"
          paragraph="Craft a dynamic and functional website that 
        reflects your brand and engages your 
        audience. From simple brochure sites to 
        complex e-commerce platforms, our 
        developers breathe life into your digital 
        vision."
        />
        <CenteredHeading text="We Are Specialized In The Following" />
        <div className="container mx-auto py-8">
          <ImageAndText
            imageUrl="/images/services-images/web-dev.png"
            header="Web Development"
            paragraph="Create a captivating website with our developers. From 
simple brochures to complex e-commerce, we handle the 
entire process for a tailored online presence. Our team 
delivers responsive, user-friendly sites, driving business 
growth and enhancing customer engagement."
          />

          <ImageAndTextReverse
            imageUrl="/images/services-images/web-design.png"
            header="Web Design"
            paragraph="Elevate your online presence with captivating 
          and user-friendly design. Our experts craft 
          visually appealing interfaces that reinforce 
          your brand identity. Through collaboration, we 
          understand your objectives and design 
          preferences, employing industry-leading tools 
          to ensure an exceptional user experience. 
          From wire framing to prototyping, every aspect 
          of your website aligns seamlessly with your 
          business goals."
          />
          <ImageAndText
            imageUrl="/images/services-images/aboutOurServices.png"
            header="Mobile Development"
            paragraph="Build engaging mobile apps for all devices. We create 
            native and cross-platform apps with exceptional user 
            experiences. Our mobile development services cover 
            iOS, Android, cross-platform, and web apps, guided by 
            experienced developers. From ideation to deployment, 
            we ensure quality and user satisfaction."
          />

          <ImageAndTextReverse
            imageUrl="/images/services-images/aboutOurServices.png"
            header="Team Training"
            paragraph="Empower your team with customized training 
            in web technologies and marketing 
            strategies. Our flexible sessions, including 
            workshops and virtual seminars, cater to 
            diverse learning styles and schedules. Our 
            experienced trainers provide real-world 
            examples for actionable insights, fostering 
            technical proficiency, collaboration, and 
            leadership development"
          />
          <ImageAndText
            imageUrl="/images/services-images/security-audit.png"
            header="Security Audits"
            paragraph="Secure your website and data with our expert audits and 
            proactive measures. Our certified security experts 
            assess and mitigate risks to protect your digital assets, 
            offering tailored solutions for compliance and peace of 
            mind."
          />

          <ImageAndTextReverse
            imageUrl="/images/services-images/aboutOurServices.png"
            header="Technical Support"
            paragraph="Get peace of mind with our round-the-clock 
            support team. We provide expert assistance 
            for any technical issues, from software 
            glitches to hardware malfunctions. Our 
            services aim to minimize downtime, 
            maximize productivity, and optimize IT 
            performance, with flexible support options 
            tailored to your needs and budget."
          />
          <CenteredHeading text="Our Design Flow" />
          <DesignFlow boxesData={boxesData} />
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default ServicesPage;
