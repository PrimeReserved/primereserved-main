"use client";
import React from "react";
import BtnArrowIcon from "./BtnArrowIcon";

const ScrollToContactButton: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Encapsulate the button within a regular React component
  const Button: React.FC = () => {
    return (
      <button
        onClick={scrollToContact}
        className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[3rem] py-4 text-sm text-white duration-300 ease-in-out hover:bg-primary/80"
      >
        Contact Us
        <span className="ml-2 h-4 w-4">
          <BtnArrowIcon />
        </span>
      </button>
    );
  };

  return <Button />;
};

export default ScrollToContactButton;
