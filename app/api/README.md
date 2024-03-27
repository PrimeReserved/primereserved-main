# API Directory

This directory contains various APIs used in the project. Each API serves a specific purpose and is explained below.

## List of APIs:

1. **Contact API:**
   - **Description:** This API handles the submission of contact form data and stores it in the database.
   - **File:** `contact.ts`
   - **Usage:**
     ```typescript
     // app/api/contact.ts
     import { dbConnect } from '@/lib/mongodb';
     import { NextResponse } from 'next/server';
     import Contact from '@/models/contact';

     export const POST = async (req: Request) => {
       // Implementation details...
     };
     ```

   - **Functionality:**
     - Connects to the MongoDB database using `dbConnect` function.
     - Parses incoming JSON data from the request body.
     - Creates a new contact record in the database using the `Contact` model.
     - Handles errors gracefully and returns appropriate responses based on the error type.

## Usage:

To use the Contact API:

1. Ensure that you have a MongoDB database set up and configured properly.

2. Import the necessary modules and functions into your API file.
   ```typescript
   import { dbConnect } from '@/lib/mongodb';
   import { NextResponse } from 'next/server';
   import Contact from '@/models/contact';
   ```

3. Implement the desired functionality in the API handler function (`POST`, `GET`, `PUT`, `DELETE`, etc.).
   ```typescript
   export const POST = async (req: Request) => {
     // Implementation details...
   };
   ```

4. Use error handling mechanisms to handle various error scenarios and return appropriate responses.
   ```typescript
   try {
     // Code for database connection, data processing, and storage...
   } catch (error) {
     // Error handling and response generation...
   }
   ```

5. *(Repeat these steps for each API as needed)*

## Note:

- Ensure that you replace placeholder names (e.g., `contact.ts`, `Contact API`) with actual names relevant to your project.
- Customize the API implementation to fit your specific requirements and project architecture.
- Refer to the comments within the code for detailed explanations of each section and functionality.
