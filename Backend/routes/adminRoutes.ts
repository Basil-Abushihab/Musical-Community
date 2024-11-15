import express from "express";
import { auth } from "../middlewares/auth";
import { registerAdmin, loginAdmin } from "../controllers/adminController";
const router = express.Router();

router.post("/registerAdmin", registerAdmin);
router.post("/loginAdmin", loginAdmin);

export default router;
