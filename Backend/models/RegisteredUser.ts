import mongoose, { Schema, Document } from "mongoose";
import { User } from "./User";
import { Order } from "./Order";
import { Instrument } from "./Instrument";
import { MusicalNote } from "./MusicalNotes";
import { Billing } from "./Billing";
import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
import { Response } from "express";
interface RegisterdUserType extends Document {
  billingInformation: mongoose.Types.ObjectId | typeof Billing;
  purchasedInstruments: mongoose.Types.ObjectId[] | typeof Instrument[];
  purchasedMusicalNote: mongoose.Types.ObjectId[] | typeof MusicalNote[];
  profileImage: string;
  listedInstruments: mongoose.Types.ObjectId[] | typeof Instrument[];
  soldInstruments: mongoose.Types.ObjectId[] | typeof Instrument[];
  listedMusicalNotes: mongoose.Types.ObjectId[] | typeof MusicalNote[];
  phone: string;
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  paymentID: string;
  customerID: string;
  lastActive: string;
  isActive: boolean;
  isDisabled: boolean;
}

const registeredUserSchema = new Schema({
  billingInformation: { type: Schema.Types.ObjectId, ref: Billing },
  purchasedNotes: [{ type: Schema.Types.ObjectId, ref: MusicalNote }],
  purchasedInstruments: [{ type: Schema.Types.ObjectId, ref: Instrument }],
  profileImage: { type: String },
  listedInstruments: [{ type: Schema.Types.ObjectId, ref: Instrument }],
  soldInstruments: [{ type: Schema.Types.ObjectId, ref: Instrument }],
  listedMusicalNotes: [{ type: Schema.Types.ObjectId, ref: MusicalNote }],
  paymentID: String,
  customerID: String,
  lastActive: String,
  isActive: { default: false, type: Boolean },
  isDisabled: { default: false, type: Boolean },
  phone: { type: String, unique: true },
});

export const RegisterdUser = User.discriminator<RegisterdUserType>(
  "RegisterdUser",
  registeredUserSchema
);

export const getUserCount = async (req: CustomRequest, res: Response) => {
  try {
    const count = await RegisterdUser.countDocuments();
    res.status(200).json({ userCount: count });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};
