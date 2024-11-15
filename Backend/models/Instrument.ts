import { Schema, model } from "mongoose";
import { User } from "./User";
const instrumentSchema = new Schema({
  instrumentTitle: String,
  instrumentDescription: String,
  instrumentMedia: [{ type: String }],
  instrumentPrice: Number,
  instrumentCondition: String,
  quantity: Number,
  rating: { type: Number, default: 0 },
  posterID: { type: Schema.Types.ObjectId, ref: User },
  isApproved: { type: Boolean, default: false },
  isSoldOut: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
});

instrumentSchema.index({ instrumentTitle: "text" });

export const Instrument = model("Instrument", instrumentSchema);
