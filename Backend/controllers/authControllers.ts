import { RegisterdUser } from "../models/RegisteredUser";
import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
import { Response } from "express";
import { hashPassword } from "../utils/hashPassword";
import { verifyPassword } from "../utils/verifyPassword";
import { generateToken } from "../utils/generateToken";
import { cookieOptions } from "../projectConfigs/cookieConfig";
import { User } from "../models/User";

export const registerUser = async (req: CustomRequest, res: Response) => {
  const userData: {
    username: string;
    password: string;
    email: string;
    phone?: string | number;
  } = req.body;
  console.log(req.body);
  try {
    const hashedPassword = hashPassword(userData.password);
    const user = new RegisterdUser({ ...userData, password: hashedPassword });
    await user.save();

    console.log(user);
    const token = generateToken(user._id.toString());
    res.cookie("token", token, cookieOptions);
    res.status(201).json({ message: "User Created Successfully", user: user });
  } catch (e) {
    console.log(e.message);
    res
      .status(501)
      .json({ message: "Internal server error", error: e.message });
  }
};

export const loginUser = async (req: CustomRequest, res: Response) => {
  const userData: { email: string; password: string } = req.body;

  try {
    const user = await RegisterdUser.findOne({ email: userData.email });
    if (
      !user ||
      !verifyPassword({
        password: userData.password,
        hashedPassword: user!.password.toString(),
      })
    ) {
      res.status(404).json({ message: "User Not found invalid Credentials" });
    } else {
      const token = generateToken(user._id.toString());
      res.cookie("token", token, cookieOptions);
      res.status(200).json({ message: "user found successfully", user: user });
    }
  } catch (e) {
    res.status(501).json({ message: "Internal server error", error: e });
  }
};
