import { Schema, model } from "mongoose";
import { User } from "./User";
import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
import { Response } from "express";
import { Review } from "./Reviews";
const musicalNotesSchema = new Schema({
  noteTitle: String,
  noteDescription: String,
  noteRating: { type: Number, default: 0 },
  price: Number,
  noteMedia: String,
  musicalScore: String,
  posterID: { type: Schema.Types.ObjectId, ref: User },
  requestDate: { type: Schema.Types.Date, default: Date.now() },
  isApproved: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  reviews: [{ type: Schema.Types.ObjectId, ref: Review }],
});

export const getNoteCount = async (req: CustomRequest, res: Response) => {
  try {
    const count = await MusicalNote.countDocuments();
    res.status(200).json({ noteCount: count });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const MusicalNote = model("MusicalNote", musicalNotesSchema);
