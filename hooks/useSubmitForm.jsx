import { useState } from "react";


const useSubmitForm = (url) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [ isSubmitting, setIsSubmitting] = useState(false);
    const [ errorMessage, setErrorMessage] = useState('');


    const handleSubmit = async (formData, setFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to submit form');
              }
        
              const data = await response.json();
              console.log('Form submission successful:', data);
              alert('Form submission successful.');
              setFormData({ // Optionally clear form after successful submission
                fullName: '',
                companyName: '',
                email: '',
                phoneNumber: '',
                serviceRequired: '',
                projectDetails: '',
              });
              // Optionally display a success message to the user
              alert('Your message has been submitted successfully!');
            } catch (error) {
              console.error('Error submitting form:', error);
              // Handle errors gracefully, e.g., display an error message to the user
              alert('There was a problem submitting your form. Please try again later.');
            }
          };

    return { handleSubmit, isSubmitting, isSubmitted, errorMessage };
};

export default useSubmitForm;