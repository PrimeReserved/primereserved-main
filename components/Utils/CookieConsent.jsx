"use client"

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (consent === "true") {
      setCookieConsent(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setCookieConsent(true);
  };

  const buttonClasses = classNames("mt-2 rounded bg-primary px-5 py-2 text-sm", {
    "text-white hover:bg-primary/80 font-semibold": !cookieConsent,
    "bg-green-500 text-white font-bold": cookieConsent,
  });

  // Track user behavior when accepting cookies
  useEffect(() => {
    if (cookieConsent) {
      // Example: Send analytics event
      // Replace with your actual tracking code
      // window.gtag('event', 'cookie_consent_accepted');
    }
  }, [cookieConsent]);

  if (!cookieConsent) {
    return (
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 text-center text-white">
        <p className="text-sm md:text-base">
          We treasure your privacy and journey with us. 🌟 Our site uses
          cookies - tiny guardians that ensure your experience is as smooth and
          personalized as possible. They help us understand what you love, so we
          can offer more of what you seek. By agreeing to cookies, you&lsquo;re
          helping us make every visit feel like coming home. If you&lsquo;re
          comfortable, please accept. Your trust means the world to us, and
          we&lsquo;re committed to safeguarding it. 💖
        </p>
        <button className={buttonClasses} onClick={handleAccept}>
          Accept
        </button>
      </div>
    );
  }
  // Personalize user experience based on preferences
  // Example: Display personalized content
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 text-center text-white">
      <p>Welcome back! Here&lsquo;s your personalized content.</p>
    </div>
  );
};

export default CookieConsent;