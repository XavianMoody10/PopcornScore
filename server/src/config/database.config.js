import mongoose from "mongoose";

export async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database hase connected");
  } catch (error) {
    console.log("Error connecting to database");
    console.log(error);
  }
}
