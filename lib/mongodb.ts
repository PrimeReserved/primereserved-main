// lib/mongodb.ts

import mongoose, { connect, disconnect } from "mongoose";

let cachedDb: typeof mongoose;

export const dbConnect = async () => {
  if (cachedDb) {
    console.log("db cache", cachedDb.STATES);
    return cachedDb;
  }
  try {
    const client = await connect(`${process.env.NEXT_PUBLIC_MONGO_URI}`);
    console.log("db new");
    console.log("Mongodb Connection Established!", client.STATES);
    cachedDb = client;
    return client;
  } catch (error) {
    console.error("Error connecting to db");
    throw new Error(`Error: ${error.message}`);
  }
};

export const closeDbConnection = async () => {
  try {
    console.warn("Disconnecting Mongodb...");
    await disconnect();
  } catch (error) {
    console.error(error);
  }
};



