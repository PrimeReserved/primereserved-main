# This repository contains code for handling contact form submissions in a Next.js application.

## API Endpoint

- Endpoint: /api/contact
- Method: POST
- Description: This endpoint is responsible for receiving and processing contact form submissions.
- Dependencies: MongoDB for database connectivity.

## File Structure

app/
└── api/
    └── contact.ts
lib/
└── mongodb.ts
models/
└── contact.ts

## Usage

- MongoDB Configuration: Ensure that MongoDB is properly configured and accessible.

- Database Connection: The dbConnect function from lib/mongodb.ts establishes a connection to the MongoDB database. Make sure to import and call this function at the beginning of the API route.

- Contact Model: The Contact model, located in models/contact.ts, defines the schema for storing contact form submissions in the database.

- API Endpoint: The POST method in app/api/contact.ts handles incoming contact form submissions. It processes the request payload, creates a new contact record in the database using the Contact model, and returns a JSON response containing the created contact.

- Error Handling: The API endpoint includes error handling for MongoDB errors and validation errors. It returns appropriate HTTP responses with corresponding status codes and error messages.

