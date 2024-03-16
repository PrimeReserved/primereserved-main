import CallScheduler from "@/components/Cards/CallScheduler";
import CenteredHeading from "@/components/Cards/CenteredHeadingProps";
import DesignFlow from "@/components/Cards/DesignFlow";
import ImageAndText from "@/components/Cards/ImageAndText";
import ImageAndTextReverse from "@/components/Cards/ImageAndTextReverse";
import ImageTextButton from "@/components/Cards/ImageTextButton";
import WhyPrimeReserved from "@/components/Cards/WhyPrimeReserved";
import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import FAQFullScreen from "@/components/FAQs/FAQFullScreen";
import ServicesHero from "@/components/Services/ServicesHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page | PrimeReserved",
  description: "PrimeReserved's Services page",
  // other metadata
};

const boxesData = [
  {
    heading: "Consultation",
    paragraph:
      "This is the first stage of contact with us. We learn about the fundamentals of your project idea in a summarized manner then go in-depth over a scheduled Discovery Call.",
    backgroundColor: "customBg",
    textColor: "black",
  },
  {
    heading: "Discovery Phase",
    paragraph:
      "This phase could be a single call or not, depending on the state of project idea. The Discovery Phase seeks to uncover and learn about the project in greater depth.",
    backgroundColor: "customSecondary",
    textColor: "white",
  },
  {
    heading: "Research and Data",
    paragraph:
      "Some clients love us to do the thinking for them. And so, after the Discovery Phase, we would go through a quick and structured research process tailored to your project and gather data.",
    backgroundColor: "customBg",
    textColor: "black",
  },
  {
    heading: "Structured SRS",
    paragraph:
      "Once we have all necessary data, we'd create and walk you through a well-structured Software Requirements Specification (SRS) for documentation purposes.",
    backgroundColor: "customSecondary",
    textColor: "white",
  },
  {
    heading: "UI/UX Design",
    paragraph:
      "Our Product Design and UI/UX Team begin sketching, wire-framing, and designing based on your needs as realized from the previous processes and data gathered.",
    backgroundColor: "customBg",
    textColor: "black",
  },
  {
    heading: "Client Review",
    paragraph:
      "This is not the final process but the next. Every client is sent a template of our entire process with timelines. This is the first client review phase.",
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
          <div id="webDevelopment">
            <ImageAndText
              imageUrl="/images/services-images/web-dev.png"
              header="Web Development"
              paragraph="Create a captivating website with our developers. We handle the 
entire process for a tailored online presence. Our team 
delivers responsive, user-friendly sites, driving business 
growth and enhancing customer engagement."
            />
          </div>

          <div id="webDesign">
            <ImageAndTextReverse
              imageUrl="/images/services-images/web-design.png"
              header="Web Design"
              paragraph="Elevate your online presence with captivating 
          and user-friendly designs. Our experts craft 
          visually appealing interfaces that reinforce 
          your brand identity. Through collaboration, we 
          understand your objectives and design 
          preferences, employing industry-leading tools 
          to ensure an exceptional user experience. 
          From wire framing to prototyping, every aspect 
          of your website aligns seamlessly with your 
          business goals."
            />
          </div>
          <div id="mobileDevelopment">
            <ImageAndText
              imageUrl="/images/services-images/mobileDesign.png"
              header="Mobile Development"
              paragraph="Build engaging mobile apps for all devices. We create 
            native and cross-platform apps with exceptional user 
            experiences. Our mobile development services cover 
            iOS, Android, cross-platform, and web apps, guided by 
            experienced developers. From ideation to deployment, 
            we ensure quality and user satisfaction."
            />
          </div>

          <div id="teamTraining">
            <ImageAndTextReverse
              imageUrl="/images/services-images/teamTraining.png"
              header="Team Training"
              paragraph="Empower your team with customized training 
            in web technologies. Our flexible sessions, including 
            workshops and virtual seminars, cater to 
            diverse learning styles and schedules. Our 
            experienced trainers provide real-world 
            examples for actionable insights, fostering 
            technical proficiency, collaboration, and 
            leadership development"
            />
          </div>
          <div id="securityAudits">
            <ImageAndText
              imageUrl="/images/services-images/security-audit.png"
              header="Security Audits"
              paragraph="Secure your website and data with our expert audits and 
            proactive measures. Our certified security experts 
            assess and mitigate risks to protect your digital assets, 
            offering tailored solutions for compliance and peace of 
            mind."
            />
          </div>

          <div id="technicalSupport">
            <ImageAndTextReverse
              imageUrl="/images/services-images/technicalSupport.png"
              header="Technical Support"
              paragraph="We are a delight to our clients with our round-the-clock support team. We provide expert assistance for any technical issues, from software glitches to hardware malfunctions. Our services aim to minimize downtime, maximize productivity, and optimize performance, with flexible support options tailored to your needs."
            />
          </div>
          <CenteredHeading text="Our Design Flow" />
          <DesignFlow boxesData={boxesData} />
        </div>
      </section>
      <CallScheduler />
      <div className="pt-16">
        <CenteredHeading text="Why PrimeReserved" />
      </div>
      <WhyPrimeReserved />
      <FAQFullScreen />
      <ContactForm />
    </>
  );
};

export default ServicesPage;
