import express from "express";
import { auth } from "../middlewares/auth";
import { getUserDataByID } from "../controllers/userController";
const router = express.Router();

router.get("/getUserData", auth, getUserDataByID);

export default router;
