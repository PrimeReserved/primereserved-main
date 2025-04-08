"use client";
import React, { useState } from "react";
import QuestionComponent from "./QuestionComponent";
import AnswerComponent from "./AnswerComponent";
import SupportMessage from "../Cards/SupportMessage";

const FAQFullScreen: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>([
    false,
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
    <section className="bg-url('/images/homepage-images-two/BG.png') w-full bg-cover">
      <div className="container py-8">
        <div className="flex flex-col items-center gap-4 xs:py-4 md:py-8">
          {/* <p className="text-lg font-bold text-primary">FAQFullScreen</p> */}
          <h1 className="text-center text-3xl font-bold">
            Got Questions? We've Got Answers
          </h1>
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-center md:flex-row">
          <div className="w-full">
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

            <QuestionComponent
              question="How soon can I expect my project to be completed?"
              isOpen={isOpen[5]}
              onClick={() => toggleFAQ(5)}
            />
            <AnswerComponent
              answer="It depends on the size and scope of your project—some take a few weeks, others a couple of months. Once you complete our project form, we’ll review the details and share a clear timeline so you know exactly what to expect."
              isOpen={isOpen[5]}
            />
            <SupportMessage />

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQFullScreen;
