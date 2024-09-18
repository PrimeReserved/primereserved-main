"use client";

import { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { addContact } from "@/lib/action";
// import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Report } from 'notiflix/build/notiflix-report-aio';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const response = await addContact(formData);
    setIsSubmitting(false);

    console.log(response);
    if (response.success === true) {
      Report.success("Success message", "Contact message sent!", "Close");
      setIsSubmitted(true);
    } else {
      Report.failure("Failure message", `Oh no!, Please try again`, 'Close');
    }
  };

  return (
    <section
      className="wow fadeInUp relative z-10 w-full bg-customBg"
      data-wow-delay=".1s"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <div className="col-span-1 space-y-4">
            <p className="text-lg font-bold text-primary">CONTACT US</p>
            <h1 className="text-lg font-bold md:text-4xl">
              Have A Project Idea?
            </h1>
          </div>
          <div className="col-span-1">
            <div className="flex xs:flex-col lg:flex-row">
              <div className="flex-1">
                <div>
                  <div className="mb-4 flex w-fit flex-col items-center justify-center rounded-full bg-gray-200 p-2">
                    <FiPhone size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 text-lg font-bold">Phone:</p>
                    <p className="mb-2">+234 (0) 706 5682 515</p>
                    <p className="mb-2">+234 (0) 810 3155 891</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div>
                  <div className="mb-4 flex w-fit flex-col items-center justify-center rounded-full bg-gray-200 p-2">
                    <FiMail size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 text-lg font-bold">E-mail:</p>
                    <p>primereserveteam@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              {isSubmitted ? (
                <div className="text-primary">
                  Thank you for your submission!
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <label
                      htmlFor="fullName"
                      className="text-md mb-2 block font-bold"
                    >
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
                  <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="text-md mb-2 block font-bold"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        placeholder="Ex. Tesla Inc"
                        className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-md mb-2 block font-bold"
                      >
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
                  <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="text-md mb-2 block font-bold"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="+23581103255892"
                        className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="serviceRequired"
                        className="text-md mb-2 block font-bold"
                      >
                        Service Required
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none"
                        required
                      >
                        <option value="">Select Your Service</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Web Development">Secure Sofware Development</option>
                        <option value="Web Development">Software Architecture</option>
                        <option value="Mobile Development">
                          Mobile Development
                        </option>
                        <option value="Technical Support">
                          Technical Support
                        </option>
                        <option value="Security Audits">Security Audits</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="projectDetails"
                      className="text-md mb-2 block font-bold"
                    >
                      Project Details*
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      placeholder="Tell us more about your idea"
                      className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`inline-flex items-center justify-center rounded-xl border border-transparent ${
                      isSubmitting ? "bg-gray-500" : "bg-primary"
                    } px-[3.5rem] py-5 text-sm text-white duration-300 ease-in-out ${
                      isSubmitting
                        ? "hover:bg-gray-500"
                        : "hover:bg-primary/80"
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                        <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                        <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                      </div>
                    ) : (
                      <span>Submit message</span>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
