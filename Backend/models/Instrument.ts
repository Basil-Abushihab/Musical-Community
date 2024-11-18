import { Schema, model } from "mongoose";
import { User } from "./User";
import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
import { Response } from "express";
import { Review } from "./Reviews";
const instrumentSchema = new Schema({
  instrumentTitle: String,
  instrumentDescription: String,
  instrumentMedia: [{ type: String }],
  instrumentPrice: Number,
  instrumentCondition: String,
  quantity: Number,
  rating: { type: Number, default: 0 },
  posterID: { type: Schema.Types.ObjectId, ref: User },
  requestDate: { type: Schema.Types.Date, default: Date.now() },
  isApproved: { type: Boolean, default: false },
  isSoldOut: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  reviews: [{ type: Schema.Types.ObjectId, ref: Review }],
});

instrumentSchema.index({ instrumentTitle: "text" });
export const getInstrumentCount = async (req: CustomRequest, res: Response) => {
  try {
    const count = await Instrument.countDocuments();
    res.status(200).json({ instrumentCount: count });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const Instrument = model("Instrument", instrumentSchema);
