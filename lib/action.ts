// File: /lib/action.ts
"use server";

import { MongoClient, ServerApiVersion } from 'mongodb';
import { revalidatePath } from 'next/cache';

// Define a type for your contact form data
export type ContactFormData = {
  fullName: string;
  companyName?: string;
  email: string;
  phoneNumber?: string;
  serviceRequired: string;
  projectDetails: string;
  submittedAt: Date;
};

// MongoDB connection string from your environment variables
const uri = process.env.MONGODB_URI || "";
const dbName = process.env.MONGODB_DB_NAME || "contact_form_db";

// Create a MongoClient with a MongoClientOptions object
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function addContact(formData: FormData) {
  try {
    // Extract form data
    const fullName = formData.get('fullName')?.toString() || '';
    const companyName = formData.get('companyName')?.toString();
    const email = formData.get('email')?.toString() || '';
    const phoneNumber = formData.get('phoneNumber')?.toString();
    const serviceRequired = formData.get('serviceRequired')?.toString() || '';
    const projectDetails = formData.get('projectDetails')?.toString() || '';

    // Validate required fields
    if (!fullName || !email || !serviceRequired || !projectDetails) {
      return { success: false, message: 'Required fields are missing' };
    }

    // Create contact object
    const contactData: ContactFormData = {
      fullName,
      companyName: companyName || undefined,
      email,
      phoneNumber: phoneNumber || undefined,
      serviceRequired,
      projectDetails,
      submittedAt: new Date(),
    };

    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    
    // Access your database and collection
    const database = client.db(dbName);
    const collection = database.collection('contacts');
    
    // Insert the contact data
    const result = await collection.insertOne(contactData);
    console.log(`Inserted document with ID: ${result.insertedId}`);
    
    // Revalidate the path to update UI if needed
    revalidatePath('/');
    
    return {
      success: true,
      message: 'Contact form submitted successfully',
      id: result.insertedId
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, message: 'Failed to submit contact form' };
  } finally {
    // Make sure to close the connection
    await client.close();
    console.log("MongoDB connection closed");
  }
}