import { Schema, model } from "mongoose";

/*Defining User Schema*/

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//exporting the UserModel
export const User = model("User", userSchema);
