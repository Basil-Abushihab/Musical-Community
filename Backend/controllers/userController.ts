import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
import { Response } from "express";
import { RegisterdUser } from "../models/RegisteredUser";
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

export const updateUserInformation = async (
  req: CustomRequest,
  res: Response
) => {
  const updatedData = req.body;
  try {
    const updatedUser = await RegisterdUser.findByIdAndUpdate(
      updatedData._id,
      updatedData
    );
    res
      .status(201)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Internal server error", error: e.message });
  }
};

export const getPaginatedUsers = async (req: CustomRequest, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  try {
    const paginatedUsers = await RegisterdUser.find().limit(limit).skip(skip);
    res.status(200).json({ users: paginatedUsers });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Internal server error", error: e.message });
  }
};
