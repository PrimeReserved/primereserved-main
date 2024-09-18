import { Document, Schema, model, models } from 'mongoose';

export interface IContact extends Document {
    fullName: string,
    companyName: string,
    email: string,
    phoneNumber: string,
    serviceRequired: string,
    projectDetails: string,
}

export const ContactSchema = new Schema<IContact>({
    fullName: String,
    companyName: String,
    email: String,
    phoneNumber: String,
    serviceRequired: String,
    projectDetails: String,
})

export const Contact = models?.Contact || model<IContact>("Contact", ContactSchema);