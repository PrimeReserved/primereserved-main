import React from "react";

interface CenteredHeadingProps {
  text: string;
}

const CenteredHeading: React.FC<CenteredHeadingProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-center text-2xl font-bold md:text-3xl">{text}</h1>
    </div>
  );
};

export default CenteredHeading;
