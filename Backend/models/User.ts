import mongoose, { Schema, model, Document } from "mongoose";
import { Order } from "./Order";
import { Instrument } from "./Instrument";
import { MusicalNote } from "./MusicalNotes";
import { SalesStatistics } from "./SalesStatistics";
import { Billing } from "./Billing";

/*Defining User Schema*/

interface RegisterdUserType extends Document {
  cart: mongoose.Types.ObjectId | any;
  billingInformation: mongoose.Types.ObjectId | typeof Billing;
  orders: mongoose.Types.ObjectId[] | typeof Order[];
  profileImage: string;
  listedInstruments: mongoose.Types.ObjectId[] | typeof Instrument[];
  soldInstruments: mongoose.Types.ObjectId[] | typeof Instrument[];
  listedMusicalNotes: mongoose.Types.ObjectId[] | typeof MusicalNote[];
  salesStatistics: mongoose.Types.ObjectId | typeof SalesStatistics;
  phone: string;
  _id: mongoose.Types.ObjectId;
  username: String;
  email: String;
  password: String;
  paymentID?: string;
  customerID?: string;
}

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//exporting the UserModel
export const User = model<RegisterdUserType>("User", userSchema);
