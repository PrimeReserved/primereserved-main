"use client"

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useFormStatus } from "react-dom"
import { FiPhone, FiMail } from "react-icons/fi";
import useSubmitForm from '@/hooks/useSubmitForm'
import IFormData from "@/interfaces/IFormData";

const ContactForm: React.FC = () => {
  const { handleSubmit, isSubmitting, isSubmitted, errorMessage } = useSubmitForm(`${process.env.NEXT_PUBLIC_CONTACT_API}`);
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    serviceRequired: "",
    projectDetails: "",
  });

  // Define the type of the event parameter
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(formData, setFormData);
  };

  return (
    <section
      className="wow fadeInUp relative z-10 w-full bg-customBg dark:bg-customDarkBg"
      id="contact-section"
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
                    <p className="mb-2 text-xs sm:text-sm md:text-lg">
                      +234 (0) 706 5682 515
                    </p>
                    <p className="mb-2 text-xs sm:text-sm md:text-lg">
                      +234 (0) 810 3155 891
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-2 flex-1">
                <div>
                  <div className="mb-4 flex w-fit flex-col items-center justify-center rounded-full bg-gray-200 p-2">
                    <FiMail size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 text-lg font-bold">E-mail:</p>
                    <p className="mb-2 text-xs sm:text-sm md:text-lg">
                      primereserveteam@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <form className="mt-8 space-y-4" onSubmit={handleFormSubmit}>
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
                  value={formData.fullName}
                  onChange={handleInputChange}
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
                    value={formData.companyName}
                    onChange={handleInputChange}
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+2348119959625"
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
                    value={formData.serviceRequired}
                    onChange={handleInputChange}
                    className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none dark:bg-customDarkBg"
                    required
                  >
                    <option value="">Select Your Service</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">
                      Mobile Development
                    </option>
                    <option value="Technical Support">Technical Support</option>
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
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[3rem] py-4 text-sm text-white duration-300 ease-in-out hover:bg-primary/80"
                disabled={isSubmitting || isSubmitted}
              >
                Submit message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;