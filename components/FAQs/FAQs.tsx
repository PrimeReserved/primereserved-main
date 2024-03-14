"use client";
import React, { useState } from "react";
import Image from "next/image";
import QuestionComponent from "./QuestionComponent";
import AnswerComponent from "./AnswerComponent";

const FAQs: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleFAQ = (index: number) => {
    const updatedState = isOpen.map((state, i) =>
      i === index ? !state : false,
    );
    setIsOpen(updatedState);
  };

  return (
    <section
      className="relative bg-cover"
      style={{ backgroundImage: `url('/images/homepage-images-2/BG.png')` }}
    >
      <div className="dark:bg-customDarkBg">
        <div className="container relative mx-auto py-8">
          <div className="flex flex-col items-center gap-4 md:py-8">
            <p className="py-2 text-lg font-bold text-primary">FAQs</p>
            <h1 className="py-2 text-center text-3xl font-bold">
              You Have Questions We Have Answers
            </h1>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="mb-4 md:w-1/3">
              <Image
                src="/images/homepage-images/faq.svg"
                alt="FAQ Image"
                className="h-auto w-full rounded-lg"
                width={300}
                height={400}
              />
            </div>
            <div className="p-4 dark:bg-customDarkBg xs:bg-white md:w-2/3 md:bg-transparent">
              <QuestionComponent
                question="What is your focus as a creative agency?"
                isOpen={isOpen[0]}
                onClick={() => toggleFAQ(0)}
              />
              <AnswerComponent
                answer="Embark on a technological voyage with PrimeReserved as we revolutionize web development landscapes. Our expertise lies in architecting robust online experiences, meticulously designed for the dynamic demands of industry leaders."
                isOpen={isOpen[0]}
              />

              <QuestionComponent
                question="What sets PrimeReserved apart from other creative agencies?"
                isOpen={isOpen[1]}
                onClick={() => toggleFAQ(1)}
              />
              <AnswerComponent
                answer="PrimeReserved stands out due to its innovative approach, unparalleled expertise, and commitment to delivering exceptional results. Our team comprises industry experts who are dedicated to understanding client needs and providing tailored solutions that drive success."
                isOpen={isOpen[1]}
              />

              <QuestionComponent
                question="What services do you offer to startups and how can they add value to my business?"
                isOpen={isOpen[2]}
                onClick={() => toggleFAQ(2)}
              />
              <AnswerComponent
                answer="Our agency offers a range of services tailored to startups, including web design, development, branding, and digital marketing. These services can add significant value to your business by enhancing your online presence, attracting customers, and driving growth."
                isOpen={isOpen[2]}
              />

              <QuestionComponent
                question="Can you redesign our app/website?"
                isOpen={isOpen[3]}
                onClick={() => toggleFAQ(3)}
              />
              <AnswerComponent
                answer="Yes, we specialize in redesigning and revamping existing apps and websites to improve their functionality, user experience, and visual appeal. Our team will work closely with you to understand your goals and deliver a redesigned solution that exceeds your expectations."
                isOpen={isOpen[3]}
              />

              <QuestionComponent
                question="How much does a UI/UX project cost?"
                isOpen={isOpen[4]}
                onClick={() => toggleFAQ(4)}
              />
              <AnswerComponent
                answer="The cost of a UI/UX project varies depending on factors such as the scope of work, complexity, and timeline. We offer customized pricing based on your specific requirements and budget. Contact us to discuss your project, and we'll provide a detailed quote."
                isOpen={isOpen[4]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
