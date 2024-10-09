import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Types } from "mongoose";
dotenv.config();

export const generateToken = (user: Types.ObjectId | string) => {
  try {
    const secret: string = process.env.SECRET || "";
    if (!secret) throw "Secret is not defined";
    const token = jwt.sign(user, secret);
    return token;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
