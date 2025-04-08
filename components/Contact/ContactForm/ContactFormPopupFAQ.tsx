"use client";

import { FiPhone, FiMail, FiX } from "react-icons/fi";
import { addContact } from "@/lib/action";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from "react";

const ContactFormPopupFAQ: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await addContact(formData);
      
      if (response.success === true) {
        Notify.success('Contact message sent!');
        setIsSubmitted(true);
      } else {
        // Use message instead of error based on your server action structure
        Notify.failure(`Failed to send message: ${response.message || 'Please try again'}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      Notify.failure('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center backdrop-blur-md">

      <div className="h-screen w-11/12 max-w-lg overflow-auto rounded-lg bg-white p-8 text-black shadow-lg dark:bg-[#1e232e] dark:text-white">
        <button
          className="absolute right-4 top-4 rounded-full bg-gray-100 p-4 text-lg text-gray-800 focus:outline-none"
          onClick={onClose}
        >
          <FiX className="h-6 w-6" />
        </button>
        <section>
          <p className="text-md font-bold text-primary">CONTACT US</p>
          <h1 className="text-md font-bold md:text-2xl">
            Got an Inquiry?
          </h1>
        </section>
        <div className="mt-8 flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 p-2">
              <FiPhone size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-md mb-1 font-bold">Phone:</p>
              <p className="mb-2 text-sm">+234 (0) 706 5682 515</p>
              <p className="mb-2 text-sm">+234 (0) 704 7390 068</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 p-2">
              <FiMail size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-md mb-1 font-bold">E-mail:</p>
              <p className="text-sm">primereserveteam@gmail.com</p>
            </div>
          </div>
        </div>
        <form className="mt-8 space-y-4 pb-20" onSubmit={handleSubmit}>
          {isSubmitted ? (
            <div className="text-primary">
              Thank you for your submission!
            </div>
          ) : (
            <>
              <div className="mb-6">
                <label htmlFor="fullName" className="text-md mb-2 block font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Jane Cooper"
                  className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none"
                  required
                />
              </div>
              <div className="mb-6">
                <div>
                  <label htmlFor="email" className="text-md mb-2 block font-bold">
                    E-mail*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <div>
                  <label
                    htmlFor="serviceRequired"
                    className="text-md mb-2 block font-bold"
                  >
                    Service Inquiry*
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none dark:bg-[#1e232e]"
                    required
                  >
                    <option value="">Select Your Service</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Team Training">Team Training</option>
                    <option value="Web Content Strategy">Web Content Strategy</option>
                    <option value="Web Content Strategy">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="projectDetails"
                  className="text-md mb-2 block font-bold"
                >
                  Ask Us Anything*
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  placeholder="We will provide the answers you need."
                  className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`inline-flex items-center justify-center rounded-xl border border-transparent ${
                  isSubmitting ? "bg-gray-500" : "bg-primary"
                } px-[3.5rem] py-5 text-sm text-white duration-300 ease-in-out ${
                  isSubmitting ? "hover:bg-gray-500" : "hover:bg-primary/80"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-white"></div>
                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-white"></div>
                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-white"></div>
                  </div>
                ) : (
                  <span>Submit Inquiry</span>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactFormPopupFAQ;