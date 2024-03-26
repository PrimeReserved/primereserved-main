"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiPhone, FiMail, FiX } from "react-icons/fi";
import useSubmitForm from "@/hooks/useSubmitForm";
import IFormData from "@/interfaces/IFormData";
import SuccessModal from "@/components/Modals/SuccessModal";

const ContactFormPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { handleSubmit, isSubmitting, isSubmitted, errorMessage } =
    useSubmitForm(`${process.env.NEXT_PUBLIC_CONTACT_API}`);
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    serviceRequired: "",
    projectDetails: "",
  });

  // State variables to control the visibility of the success modal
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(formData, setFormData, handleSuccess); // Pass handleSuccess function to the handleSubmit function
  };

  // Define handleSuccess function to open the success modal
  const handleSuccess = () => {
    setIsSuccessModalOpen(true);
  };

  // Define handleCloseSuccessModal function to close the success modal
  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    onClose(); // Close the form popup after closing the success modal
  };

  return (
    <div className="fixed left-0 top-20 z-50 flex h-screen w-full items-center justify-center backdrop-blur-md">
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
            Have A Project Idea?
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
              <p className="mb-2 text-sm">+234 (0) 810 3155 891</p>
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
        <form className="mt-8 space-y-4 pb-20" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label htmlFor="fullName" className="text-md mb-2 block font-bold">
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
              <label htmlFor="email" className="text-md mb-2 block font-bold">
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
                className="my-2 w-full border-b-2 border-gray-500 bg-transparent pb-2 text-xl focus:outline-none dark:bg-[#1e232e]"
                required
              >
                <option value="">Select Your Service</option>
                <option value="Web Design">Web Design</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Development">Mobile Development</option>
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
            disabled={isSubmitting || isSubmitted}
          >
            Submit message
          </button>
        </form>
      </div>
      {/* SuccessModal component */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
      />
    </div>
  );
};

export default ContactFormPopup;
