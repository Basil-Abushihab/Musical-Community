import { Schema, model } from "mongoose";
import { User } from "./User";

const adminSchema = new Schema({
  lastLogin: { type: Date },
  isActive: { type: Boolean, default: false },
});

const Admin = User.discriminator("Admin", adminSchema);

export default Admin;
