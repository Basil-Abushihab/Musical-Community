import Stripe from "stripe";
import dotenv from "dotenv";
import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
import { Response } from "express";
import { RegisterdUser } from "../models/RegisteredUser";
import { User } from "../models/User";
import { Order } from "../models/Order";
import { Document } from "mongoose";
import { Billing } from "../models/Billing";
import { Schema } from "mongoose";
dotenv.config();
const stripeAPIKEY = process.env.STRIPE_API_KEY;
let stripe: Stripe | undefined;
interface IRegisteredUser extends Document {
  email: string;
  name: string;
}

if (stripeAPIKEY) {
  stripe = new Stripe(stripeAPIKEY, {
    apiVersion: "2024-09-30.acacia",
  });
}

export const makePaymentIntent = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const userID = req.user;
  const { amount } = req.body;

  try {
    const user: IRegisteredUser | any = await User.findById(userID);

    let customer;
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    if (!user.customerID) {
      customer = await stripe?.customers.create({
        email: user.email,
        balance: 500000,
      });
    } else {
      customer = await stripe?.customers.retrieve(user.customerID);
    }

    if (!customer) {
      res.status(400).json({ message: "Failed to create Stripe customer" });
    }

    const paymentIntent = await stripe?.paymentIntents.create({
      amount: amount,
      currency: "USD",
      customer: customer?.id,
      confirm: false,
      automatic_payment_methods: { enabled: true, allow_redirects: "never" },
    });

    if (!paymentIntent) {
      res.status(400).json({ message: "Failed to create payment intent" });
    }

    const userToUpdate = await RegisterdUser.findByIdAndUpdate(userID, {
      paymentID: paymentIntent?.id,
      customerID: customer.id,
    });
    res.status(201).json({
      message: "Payment Intent Created Successfully",
      paymentIntent: paymentIntent?.client_secret,
      user: userToUpdate,
    });
  } catch (e) {
    console.log(e);
    res
      .status(501)
      .json({ message: "Internal server error", error: e.message });
  }
};

export const chargePayment = async (req: CustomRequest, res: Response) => {
  const userID = req.user;
  const billingInformationData = req.body;

  try {
    const user = await User.findById(userID);
    console.log(user);
    if (!user) {
      res.status(404).json({ message: "user couldnt be found" });
    }
    const paymentIntent = await stripe?.paymentIntents.retrieve(
      user?.paymentID!
    );
    if (!user?.billingInformation) {
      const billingInformation = await new Billing(
        billingInformationData
      ).save();
      await User.findByIdAndUpdate(userID, {
        billingInformation: billingInformation._id,
      });
      await stripe?.paymentIntents.confirm(user?.paymentID!, {
        payment_method: "pm_card_visa",
      });

      const order = new Order({
        billingInformation: billingInformation._id,
        deliveryFee: 10,
        subTotal: paymentIntent?.amount,
        total: 10 + paymentIntent?.amount!,
      });
      res
        .status(201)
        .json({ message: "Items purchased successfully", order: order });
    } else {
      const billingInformation = await Billing.findById(
        user.billingInformation
      );
      await stripe?.paymentIntents.confirm(user?.paymentID!, {
        payment_method: "pm_card_visa",
      });
      const order = new Order({
        billingInformation: billingInformation?._id,
        deliveryFee: 10,
        subTotal: paymentIntent?.amount,
        total: 10 + paymentIntent?.amount!,
      });
      res
        .status(201)
        .json({ message: "Items purchased successfully", order: order });
    }
  } catch (e) {
    console.log(e);
    res
      .status(501)
      .json({ message: "Internal server error", error: e.message });
  }
};
