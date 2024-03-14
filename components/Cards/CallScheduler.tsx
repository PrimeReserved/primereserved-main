import React from "react";
import IconButton from "../Buttons/IconButton";
import BtnArrowIcon from "../Buttons/BtnArrowIcon";

const CallScheduler: React.FC = () => {
  return (
    <div
      className="relative flex h-96 items-center justify-center bg-cover bg-center pb-8 text-white"
      style={{
        backgroundImage: "url('/images/services-images/callDesktop.png')",
      }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
        {/* Text Content */}
        <h1 className="text-3xl font-bold text-white">Get On A Call With Us</h1>
        <p className="text-md my-6 px-20 text-center text-white md:px-40 md:text-lg">
          Would you like to hear from our team for more clarification? then jump
          on this call and have doubts cleared, with just a few minutes
          conversation.
        </p>
        <IconButton text="Contact us now" icon={<BtnArrowIcon />} />
      </div>
    </div>
  );
};

export default CallScheduler;
