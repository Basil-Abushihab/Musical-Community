import { Schema, model } from "mongoose";

const billingSchema = new Schema({
  city: String,
  addressLine: String,
  street: String,
  apartmentNumber: String,
});

export const Billing = model("Billing", billingSchema);
