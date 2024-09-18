"use server";

import { revalidatePath } from "next/cache";
import { Contact } from "@/models/contact";
import { dbConnect } from "@/lib/mongodb";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const addContact = async (formData: any) => {
  const {
    fullName,
    companyName,
    email,
    phoneNumber,
    serviceRequired,
    projectDetails
  } = Object.fromEntries(formData);
  try {
    dbConnect();
    const newContact = new Contact({
      fullName,
      companyName,
      email,
      phoneNumber,
      serviceRequired,
      projectDetails,
    });
    await newContact.save(formData);
    console.log(`New Contact data saved to db: ${newContact}`);

    revalidatePath("/");
    return { success: true }
  } catch (error) {
    console.log(error);
    return { error: `${error}` };
  }
};
