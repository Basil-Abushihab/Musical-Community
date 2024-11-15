import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  orderedItems: [
    {
      itemType: {
        type: String,
        required: true,
        enum: ["Instrument", "MusicalNote"],
      },
      item: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: "orderedItems.itemType",
      },
    },
  ],
  total: Number,
  subTotal: Number,
  deliveryFee: Number,
  billingInformation: { type: Schema.Types.ObjectId, ref: "Billing" },
});

export const Order = model("Order", orderSchema);
