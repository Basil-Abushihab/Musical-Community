//DB config imports
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Config Variables
const URL: string = process.env.MONGO_URL || "";

//check if URL is undefined or empty
if (!URL) {
  throw new Error("MongoDB URL is not defined in environment variables.");
}
// DB connection
mongoose.connect(URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("connection successfull");
});

import { Order } from "../models/Order";

export default mongoose;
