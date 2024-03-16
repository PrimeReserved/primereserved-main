import React from "react";
import { FiCode } from "react-icons/fi";

const Services: React.FC = () => {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <p className="py-2 text-lg font-bold text-primary">OUR SERVICES</p>
          <h2 className="py-2 text-3xl font-bold">
            We Are Specialized In The Following
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceBox key={index} {...service} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceBoxProps {
  title: string;
  description: string;
  isFirst: boolean;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({
  title,
  description,
  isFirst,
}) => {
  return (
    <div
      className={`group rounded-lg border-2 border-gray-100 p-6 shadow-lg hover:bg-primary hover:text-white ${
        isFirst ? "bg-white text-black" : "bg-white text-black"
      }`}
    >
      <div className="mb-6 flex items-start justify-start">
        <div
          className={`mr-4 rounded-full group-hover:bg-white group-hover:text-primary ${
            isFirst ? "bg-primary text-white" : "bg-primary text-white"
          } p-4`}
        >
          <FiCode size={32} />
        </div>
      </div>
      <div className="text-left">
        <h3
          className={`mb-4 text-2xl font-bold group-hover:text-white ${
            isFirst ? "text-black" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mb-6 group-hover:text-white ${
            isFirst ? "text-gray-700" : "text-gray-700"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const servicesData: ServiceBoxProps[] = [
  {
    title: "Web Design",
    description:
      "Tailored website solutions crafted to meet unique business requirements. Creative design that aligns with brand identity and enhances user experience.",
    isFirst: true,
  },
  {
    title: "Web Development",
    description:
      "As much as we love our clients to think, we also love to think with them. Let our software engineering team bring your ideas/projects to fruition.",
    isFirst: false,
  },
  {
    title: "Technical Support",
    description:
      "We provide technical support to individuals, businesses, and teams of different sizes. Reach out to us today if you or your team needs support.",
    isFirst: false,
  },
  {
    title: "Mobile Applications",
    description:
      "From idea to code, and beyond, our software team delivers user-centric state-of-the-art cutting-edge applications that are loved by your users.",
    isFirst: false,
  },
  {
    title: "Team Training",
    description:
      "Anything worth doing is worth training for. Do you have a team that requires training in any of the services we offer? Reach out to us today!",
    isFirst: false,
  },
  {
    title: "Security Audits",
    description:
      "Great products and solutions only have great worth when they are all-round reliable. Our team prioritizes not just building but also securing.",
    isFirst: false,
  },
];

export default Services;
