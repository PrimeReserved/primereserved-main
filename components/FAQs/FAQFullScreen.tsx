"use client";
import React, { useState } from "react";
import QuestionComponent from "./QuestionComponent";
import AnswerComponent from "./AnswerComponent";

const FAQFullScreen: React.FC = () => {
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
    <section className="bg-url('/images/homepage-images-2/BG.png') w-full bg-cover">
      <div className="container py-8">
        <div className="flex flex-col items-center gap-4 xs:py-4 md:py-8">
          {/* <p className="text-lg font-bold text-primary">FAQFullScreen</p> */}
          <h1 className="text-center text-3xl font-bold">
            You Have Questions We Have Answers
          </h1>
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-center md:flex-row">
          <div className="w-full">
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
              question="What sets Primereserved apart from other creative agencies?"
              isOpen={isOpen[1]}
              onClick={() => toggleFAQ(1)}
            />
            <AnswerComponent
              answer="Embark on a technological voyage with PrimeReserved as we revolutionize web development landscapes. Our expertise lies in architecting robust online experiences, meticulously designed for the dynamic demands of industry leaders."
              isOpen={isOpen[1]}
            />

            <QuestionComponent
              question="What services do you offer to startups and how can they add value to my business?"
              isOpen={isOpen[2]}
              onClick={() => toggleFAQ(2)}
            />
            <AnswerComponent
              answer="Embark on a technological voyage with PrimeReserved as we revolutionize web development landscapes. Our expertise lies in architecting robust online experiences, meticulously designed for the dynamic demands of industry leaders."
              isOpen={isOpen[2]}
            />

            <QuestionComponent
              question="Can you redesign our app/website?"
              isOpen={isOpen[3]}
              onClick={() => toggleFAQ(3)}
            />
            <AnswerComponent
              answer="Embark on a technological voyage with PrimeReserved as we revolutionize web development landscapes. Our expertise lies in architecting robust online experiences, meticulously designed for the dynamic demands of industry leaders."
              isOpen={isOpen[3]}
            />

            <QuestionComponent
              question="How much does a UI/UX project cost?"
              isOpen={isOpen[4]}
              onClick={() => toggleFAQ(4)}
            />
            <AnswerComponent
              answer="Embark on a technological voyage with PrimeReserved as we revolutionize web development landscapes. Our expertise lies in architecting robust online experiences, meticulously designed for the dynamic demands of industry leaders."
              isOpen={isOpen[4]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQFullScreen;
