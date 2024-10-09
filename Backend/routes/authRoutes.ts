import express from "express";
const router = express.Router();
import { registerUser, loginUser } from "../controllers/authControllers";
import { processImage } from "../middlewares/imageProccessor";

router.post("/registerUser", processImage, registerUser);
router.post("/loginUser", processImage, loginUser);

export default router;
