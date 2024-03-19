import React from "react";

interface AnswerProps {
  answer: string;
  isOpen: boolean;
}

const AnswerComponent: React.FC<AnswerProps> = ({ answer, isOpen }) => {
  return (
    <div>
      {isOpen && (
        <div className="mt-2">
          <p className="dark:text-customDarkTextColor text-gray-700">
            {answer}
          </p>
        </div>
      )}
      <hr className="my-4 border-t-2 border-gray-300" />
    </div>
  );
};

export default AnswerComponent;
