import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
import { Response } from "express";
import { RegisterdUser } from "../models/RegisteredUser";
import { Order } from "../models/Order";
export const getUserDataByID = async (req: CustomRequest, res: Response) => {
  const userID = req.user;
  try {
    const user = await RegisterdUser.findById(userID)
      .populate([
        { path: "billingInformation" },
        { path: "orders" },
        { path: "listedInstruments" },
        { path: "soldInstruments" },
        { path: "listedMusicalNotes" },
        { path: "salesStatistics" },
      ])
      .exec();
    if (user) {
      res.status(200).json({ message: "User found successfully", user: user });
    } else {
      res.status(204).json({ message: "No user data was found" });
    }
  } catch (e) {
    console.log(e);
    res.status(501).json(e);
  }
};
