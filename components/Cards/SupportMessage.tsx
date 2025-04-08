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
  contactText = "contact us"
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
      if (showPopup && event.key === 'Escape') {
        handleClosePopup();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    // Prevent body scrolling when popup is open
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [showPopup]);

  return (
    <>
      <div className="w-full mx-auto p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-lg md:text-xl font-medium text-gray-800">{heading}</h2>
        <p className="text-gray-400 text-sm md:text-md">
          {message}{" "}
          <button 
            onClick={handleOpenPopup}
            className="text-purple-500 hover:text-purple-600 transition-colors border-none bg-transparent p-0 font-inherit cursor-pointer"
            aria-label="Open contact form"
          >
            {contactText}
          </button>
          {" "}and we will get back to you shortly.
        </p>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-2xl mx-4">
            <button 
              onClick={handleClosePopup}
              className="absolute -top-12 right-0 text-white hover:text-gray-200 text-xl font-bold p-2"
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