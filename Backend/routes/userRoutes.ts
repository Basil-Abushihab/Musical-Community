import express from "express";
import { auth } from "../middlewares/auth";
import {
  getUserDataByID,
  updateUserInformation,
  getPaginatedUsers,
} from "../controllers/userController";
import { getUserCount } from "../models/RegisteredUser";
const router = express.Router();

router.get("/getUserData", auth, getUserDataByID);
router.get("/getPaginatedUsers", auth, getPaginatedUsers);
router.put("/updateUserData", auth, updateUserInformation);
router.get("/getDocumentCount", auth, getUserCount);

export default router;
