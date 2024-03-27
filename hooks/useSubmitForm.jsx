import { useState } from "react";

const useSubmitForm = (url) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (formData, setFormData, handleSuccess) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      console.log("Form submission successful:", data);
      setFormData({
        // Optionally clear form after successful submission
        fullName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        serviceRequired: "",
        projectDetails: "",
      });
      setIsSubmitted(true); // Update state to indicate form submission
      handleSuccess(); // Call the success handler
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors gracefully, e.g., display an error message to the user
      alert(
        "There was a problem submitting your form. Please try again later.",
      );
    } finally {
      setIsSubmitting(false); // Reset submitting state regardless of success or failure
    }
  };

  return { handleSubmit, isSubmitting, isSubmitted, errorMessage };
};

export default useSubmitForm;
