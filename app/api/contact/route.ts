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
      return error;
    }
  };