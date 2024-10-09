import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  orderedItems: [
    { type: Schema.Types.ObjectId, ref: "Instrument" },
    { type: Schema.Types.ObjectId },
  ],
  total: Number,
  subTotal: Number,
  deliveryFee: Number,
  billingInformation: { type: Schema.Types.ObjectId, ref: "Billing" },
});

export const Order = model("Order", orderSchema);
