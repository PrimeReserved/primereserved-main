import React from "react";

interface BoxData {
  heading: string;
  paragraph: string;
  backgroundColor: string;
  textColor: string;
}

interface DesignFlowProps {
  boxesData: BoxData[];
}

const DesignFlow: React.FC<DesignFlowProps> = ({ boxesData }) => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {boxesData.map((box, index) => (
            <div
              key={index}
              className="w-full p-6 transition duration-300 ease-in-out hover:scale-105 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"
            >
              <div
                className={`bg-${box.backgroundColor} text-${box.textColor} flex flex-col items-center justify-center rounded-lg p-8 shadow-lg md:py-20`}
                style={{ minWidth: "240px", height: "230px" }}
              >
                <h2 className="mb-4 text-xl font-semibold">{box.heading}</h2>
                <p className="text-sm">{box.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignFlow;
