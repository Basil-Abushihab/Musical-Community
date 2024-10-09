import { Schema, model } from "mongoose";
import { User } from "./User";
const musicalNotesSchema = new Schema({
  noteTitle: String,
  noteDescription: String,
  noteRating: { type: Number, default: 0 },
  price: Number,
  noteMedia: String,
  musicalScore: String,
  posterID: { type: Schema.Types.ObjectId, ref: User },
  isApproved: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
});

export const MusicalNote = model("MusicalNote", musicalNotesSchema);
