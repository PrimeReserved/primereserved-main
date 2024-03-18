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
      style={{ backgroundImage: `url('/images/homepage-images-two/BG.png')` }}
    >
      <div className="dark:bg-customDarkBg">
        <div className="container relative mx-auto py-8">
          <div className="flex flex-col items-center gap-4 md:py-8">
            <p className="py-2 text-lg font-bold text-primary">FAQs</p>
            <h1 className="py-2 text-center text-3xl font-bold">
              You Have Questions We Have Answers
            </h1>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 hidden md:flex md:w-1/3">
              <Image
                src="/images/homepage-images/faq.svg"
                alt="FAQ Image"
                className="h-auto w-full rounded-lg"
                width={300}
                height={400}
              />
            </div>
            <div className="bg-white p-4 dark:bg-customDarkBg md:w-2/3 md:bg-transparent lg:bg-transparent">
              <QuestionComponent
                question="What is PrimeReserved's focus?"
                isOpen={isOpen[0]}
                onClick={() => toggleFAQ(0)}
              />
              <AnswerComponent
                answer="PrimeReserved focuses on not just building innovative solutions, but helping other businesses grow by offering our expertise in web design and development, mobile development, team training, technical support, and security audits."
                isOpen={isOpen[0]}
              />

              <QuestionComponent
                question="What sets PrimeReserved apart?"
                isOpen={isOpen[1]}
                onClick={() => toggleFAQ(1)}
              />
              <AnswerComponent
                answer="PrimeReserved stands out due to its innovative approach, unparalleled expertise, and commitment to delivering exceptional results. Our team comprises of industry experts who are dedicated to understanding client needs and providing tailored solutions that drive success."
                isOpen={isOpen[1]}
              />

              <QuestionComponent
                question="Can you redesign our app/website?"
                isOpen={isOpen[2]}
                onClick={() => toggleFAQ(2)}
              />
              <AnswerComponent
                answer="Yes, we specialize in not only creating from scratch, but also redesigning and revamping existing apps and websites to improve their functionality, user experience, and visual appeal. Our team will work closely with you to understand your goals and deliver a redesigned solution that exceeds your expectations."
                isOpen={isOpen[2]}
              />

              <QuestionComponent
                question="What is your Design and Development Process like?"
                isOpen={isOpen[3]}
                onClick={() => toggleFAQ(3)}
              />
              <AnswerComponent
                answer="Our Design and Development process is a structured process that is indeed loved by our clients because they're part of the journey in an amazing way. Contact us and we'd walk you through it!"
                isOpen={isOpen[3]}
              />

              <QuestionComponent
                question="Tell me about the company's name—PrimeReserved."
                isOpen={isOpen[4]}
                onClick={() => toggleFAQ(4)}
              />
              <AnswerComponent
                answer="Let's answer this one with a question: 'How would you like to be at a place where the prime and uniquely excellent things are reserved for you always?' Yeah? That's what we thought! :) Here at PrimeReserved, your satisfaction is our prime reserve. Get in contact with us. We'd love to hear from you!"
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
