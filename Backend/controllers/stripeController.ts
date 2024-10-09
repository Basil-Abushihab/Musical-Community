import Stripe from "stripe";
import dotenv from "dotenv";
import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
import { Response } from "express";
import { RegisterdUser } from "../models/RegisteredUser";
import { Order } from "../models/Order";
import { Document } from "mongoose";
dotenv.config();
const stripeAPIKEY = process.env.STRIPE_API_KEY;
let stripe: Stripe | undefined;
interface IRegisteredUser extends Document {
  email: string;
  name: string;
  // Add other fields as needed
}

if (stripeAPIKEY) {
  stripe = new Stripe(stripeAPIKEY, {
    apiVersion: "2024-09-30.acacia",
  });
}

export const makePayment = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const userID = req.user;
  const { amount } = req.body;
  try {
    const user: IRegisteredUser | any = await RegisterdUser.findById(userID);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const customer = await stripe?.customers.create({
      email: user.email,
    });

    if (!customer) {
      res.status(400).json({ message: "Failed to create Stripe customer" });
    }

    const paymentIntent = await stripe?.paymentIntents.create({
      amount: amount,
      currency: "USD",
      customer: customer?.id,
    });

    if (!paymentIntent) {
      res.status(400).json({ message: "Failed to create payment intent" });
    }
    res
      .status(201)
      .json({
        message: "Payment successful",
        paymentIntent: paymentIntent?.client_secret,
      });
  } catch (e) {
    res
      .status(501)
      .json({ message: "Internal server error", error: e.message });
  }
};
