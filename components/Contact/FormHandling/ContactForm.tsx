"use client"

import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiPhone, FiMail, FiLoader } from "react-icons/fi";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  serviceRequired: string;
  projectDetails: string;
}

const ContactForm: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    serviceRequired: "",
    projectDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CONTACT_API}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (!responseData.ok) throw new Error('Network response was not ok');
      setIsSubmitted(true);
    } catch (error) {
      console.error(`Failed to submit the form, ${error}`);
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
              {isSubmitting && (
                <div className="text-primary">Loading...</div>
              )}
              {isSubmitted && !isSubmitting && (
                <div className="text-primary">Thank you for your submission!</div>
              )}
              {!isSubmitting && !isSubmitted && (
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
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Jane Cooper"
                      className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none"
                      required
                    />
                  </div>
                  {/* Rest of the form elements */}
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
                        value={formData.serviceRequired}
                        onChange={handleInputChange}
                        className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none"
                        required
                      >
                        <option value="">Select Your Service</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Web Development">Web Development</option>
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
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your idea"
                      className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[3.5rem] py-5 text-sm text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Submitting...</span>
                        <FiLoader className="animate-spin" />
                      </>
                    ) : (
                      "Submit message"
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
