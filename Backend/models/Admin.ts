import { Schema, model } from "mongoose";
import { User } from "./User";

interface adminType {
  email: string;
  password: string;
  lastLogin: Date;
  isActive: boolean;
}

const adminSchema = new Schema({
  lastLogin: { type: Date },
  isActive: { type: Boolean, default: false },
});

export const Admin = User.discriminator<adminType>("Admin", adminSchema);
