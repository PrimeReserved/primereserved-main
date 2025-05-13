"use client";
import React, { useState, useEffect } from "react";
import ContactFormPopupFAQ from "../Contact/ContactForm/ContactFormPopupFAQ";

interface SupportMessageProps {
  heading?: string;
  message?: string;
  contactText?: string;
}

const SupportMessage: React.FC<SupportMessageProps> = ({
  heading = "Can't find your answer?",
  message = "Please feel free to",
  contactText = "contact us",
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Add event listener for escape key to close popup
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (showPopup && event.key === "Escape") {
        handleClosePopup();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    // Prevent body scrolling when popup is open
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  return (
    <>
      <div className="mx-auto w-full rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-lg font-medium text-gray-800 md:text-xl">
          {heading}
        </h2>
        <p className="md:text-md text-sm text-gray-400">
          {message}{" "}
          <button
            onClick={handleOpenPopup}
            className="font-inherit cursor-pointer border-none bg-transparent p-0 text-blue-500 transition-colors hover:text-blue-600"
            aria-label="Open contact form"
          >
            {contactText}
          </button>{" "}
          and we will get back to you shortly.
        </p>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative mx-4 w-full max-w-2xl">
            <button
              onClick={handleClosePopup}
              className="absolute -top-12 right-0 p-2 text-xl font-bold text-white hover:text-gray-200"
              aria-label="Close popup"
            >
              ✕
            </button>
            <ContactFormPopupFAQ onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </>
  );
};

export default SupportMessage;
