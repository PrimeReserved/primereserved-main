# API Directory

This directory contains various APIs used in the project. Each API serves a specific purpose and is explained below.

## List of APIs:

1. **useSubmitForm API:**
   - **Description:** This API is used for handling form submissions.
   - **File:** `useSubmitForm.js`
   - **Usage:**
     ```javascript
     import { useState } from "react";

     const useSubmitForm = (url) => {
         // Implementation details...
     };

     export default useSubmitForm;
     ```

   - **Functionality:**
     - Handles form submissions via POST request to the specified URL.
     - Manages form submission states like submission status, submission progress, and error messages.

2. *(Add additional APIs as needed)*

## Usage:

To use any of the APIs listed above, follow these steps:

1. Import the API into your component file.
   ```javascript
   import useSubmitForm from './useSubmitForm';
   ```

2. Call the necessary functions or methods provided by the API.
   ```javascript
   const { handleSubmit, isSubmitting, isSubmitted, errorMessage } = useSubmitForm('https://example.com/api/submit');
   ```

3. Use the returned values or functions as required in your component logic.
   ```javascript
   const handleFormSubmit = (formData) => {
       handleSubmit(formData, setFormData);
   };
   ```

4. *(Repeat these steps for each API as needed)*

## Note:

- Ensure that you provide the correct URL or configuration parameters when using each API.
- Refer to the documentation or comments within each API file for detailed usage instructions and function descriptions.