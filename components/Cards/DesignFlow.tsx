import React from 'react';

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
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-6"
            >
              <div
                className={`bg-${box.backgroundColor} text-${box.textColor} rounded-lg shadow-lg p-8`}
              >
                <h2 className="text-xl font-semibold mb-4">{box.heading}</h2>
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
