import { Admin } from "../models/Admin";
import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
import { Response } from "express";
import { verifyPassword } from "../utils/verifyPassword";
import { generateToken } from "../utils/generateToken";
import { cookieOptions } from "../projectConfigs/cookieConfig";
import { hashPassword } from "../utils/hashPassword";

export const loginAdmin = async (req: CustomRequest, res: Response) => {
  const adminData: { email: string; password: string } = req.body;
  try {
    const admin = await Admin.findOne({ email: adminData.email });
    if (!admin) {
      res.status(403).json({ message: "Invalid Credentials" });
    } else {
      const isVerified: boolean = verifyPassword({
        password: adminData.password,
        hashedPassword: admin.password,
      });
      if (isVerified) {
        const token = generateToken(admin._id.toString());
        res.cookie("token", token, cookieOptions);
        res.status(200).json({ admin: admin });
      }
    }
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Internal server serror", error: e.message });
  }
};

export const registerAdmin = async (req: CustomRequest, res: Response) => {
  const adminData: {
    username: string;
    password: string;
    email: string;
  } = req.body;
  console.log(req.body);
  try {
    const hashedPassword = hashPassword(adminData.password);
    const admin = new Admin({ ...adminData, password: hashedPassword });
    await admin.save();

    const token = generateToken(admin._id.toString());
    res.cookie("token", token, cookieOptions);
    res.status(201).json({ admin: admin });
  } catch (e) {
    console.log(e.message);
    res
      .status(501)
      .json({ message: "Internal server error", error: e.message });
  }
};
