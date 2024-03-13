// QuestionComponent.tsx
import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface QuestionProps {
  question: string;
  isOpen: boolean;
  onClick: () => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({
  question,
  isOpen,
  onClick,
}) => {
  return (
    <div className="mb-6 w-full py-4">
      <div className="flex cursor-pointer items-center justify-between">
        <p className="font-semibold xs:text-lg md:text-xl">{question}</p>
        <button onClick={onClick}>
          {isOpen ? (
            <FiChevronUp
              size={30}
              className="rounded-full bg-primary p-1 text-white"
            />
          ) : (
            <FiChevronDown
              size={30}
              className="rounded-full bg-gray-200 p-1 text-customTextColor"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default QuestionComponent;
