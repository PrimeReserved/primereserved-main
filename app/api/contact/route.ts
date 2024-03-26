// app/api/contact.ts
import { dbConnect } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import Contact from '@/models/contact';


export const POST = async (req: Request) => {
  try {
    await dbConnect();
    const payload = await req.json();
    const contact = await Contact.create(payload);
    return NextResponse.json({ contact });
  } catch (error) {
    console.log(error)
    // Handle specific errors based on status codes
    if (error.name === 'MongoServerError'){
      // Handle mongo error (e.g)
      return new Response('Internal Server Error', {status: 500 });
    } else if (error.message.includes('validation failed')) {
      // Handle validation errors
      return new Response('Bad Request: Validation failed', { status: 400 });
    } else {
      // Handle other unexpected errors
      return new Response('Internal Server Error', { status: 500 })
    }
  }
};