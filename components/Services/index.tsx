import React from "react";
import { FiCode } from "react-icons/fi";

const Services: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <p className="text-lg font-bold text-primary">OUR SERVICES</p>
          <h2 className="text-3xl font-bold">
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
      className={`rounded-lg p-6 shadow-lg ${
        isFirst ? "bg-primary text-white" : "bg-white text-black"
      }`}
    >
      <div className="mb-6 flex items-start justify-start">
        <div
          className={`mr-4 rounded-full ${
            isFirst ? "bg-white text-primary" : "bg-primary text-white"
          } p-4`}
        >
          <FiCode size={32} />
        </div>
      </div>
      <div className="text-left">
        <h3
          className={`mb-4 text-2xl font-bold ${
            isFirst ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`mb-6 ${isFirst ? "text-white" : "text-gray-700"}`}>
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
      "Tailored website solutions crafted to meet unique business requirements. Creative design that aligns with brand identity and enhances user experience.",
    isFirst: false,
  },
  {
    title: "Technical Support",
    description:
      "Tailored website solutions crafted to meet unique business requirements. Creative design that aligns with brand identity and enhances user experience.",
    isFirst: false,
  },
  {
    title: "Mobile Applications",
    description:
      "Tailored website solutions crafted to meet unique business requirements. Creative design that aligns with brand identity and enhances user experience.",
    isFirst: false,
  },
  {
    title: "Team Training",
    description:
      "Tailored website solutions crafted to meet unique business requirements. Creative design that aligns with brand identity and enhances user experience.",
    isFirst: false,
  },
  {
    title: "Security Audits",
    description:
      "Tailored website solutions crafted to meet unique business requirements. Creative design that aligns with brand identity and enhances user experience.",
    isFirst: false,
  },
];

export default Services;
