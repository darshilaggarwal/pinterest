import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI; // Fetch the MongoDB URI from environment variables
    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
    await mongoose.connect(uri, {
     
    });
    console.log("MongoDB Connected Successfully ✅");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
