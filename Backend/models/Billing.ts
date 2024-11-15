import { Schema, model, Document } from "mongoose";

interface BillingType extends Document {
  city: String;
  addressLine: String;
  street: String;
  apartmentNumber: String;
  _id: Schema.Types.ObjectId;
}

const billingSchema = new Schema({
  city: String,
  addressLine: String,
  street: String,
  apartmentNumber: String,
});

export const Billing = model<BillingType>("Billing", billingSchema);
