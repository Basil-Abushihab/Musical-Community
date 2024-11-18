import { Schema, model } from "mongoose";
import { User } from "./User";
const reviewSchema = new Schema({
  poster: { type: Schema.Types.ObjectId, ref: User },
  review: String,
  rating: Number,
  date: { type: Schema.Types.Date, default: Date.now() },
});

export const Review = model("Review", reviewSchema);
