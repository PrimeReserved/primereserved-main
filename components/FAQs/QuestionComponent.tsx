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
    <div className="mb-6 py-4">
      <div className="flex cursor-pointer items-center justify-between">
        <p className="font-semibold xs:text-lg md:text-2xl">{question}</p>
        <button onClick={onClick}>
          {isOpen ? (
            <FiChevronUp size={24} className="rounded-full bg-primary p-1" />
          ) : (
            <FiChevronDown size={24} className="rounded-full bg-gray-200 p-1" />
          )}
        </button>
      </div>
    </div>
  );
};

export default QuestionComponent;
