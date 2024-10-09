import { Schema, model } from "mongoose";
import { User } from "./User";
import { Order } from "./Order";
import { Instrument } from "./Instrument";
import { MusicalNote } from "./MusicalNotes";
import { SalesStatistics } from "./SalesStatistics";
import { Billing } from "./Billing";

const registeredUserSchema = new Schema({
  billingInformation: { type: Schema.Types.ObjectId, ref: Billing },
  orders: [{ type: Schema.Types.ObjectId, ref: Order }],
  profileImage: String,
  listedInstruments: [{ type: Schema.Types.ObjectId, ref: Instrument }],
  soldInstruments: [{ type: Schema.Types.ObjectId, ref: Instrument }],
  listedMusicalNotes: [{ type: Schema.Types.ObjectId, ref: MusicalNote }],
  salesStatistics: { type: Schema.Types.ObjectId, ref: SalesStatistics },
  phone: { type: String, unique: true },
});

export const RegisterdUser = User.discriminator(
  "RegisteredUser",
  registeredUserSchema
);
