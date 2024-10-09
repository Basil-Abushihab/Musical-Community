import express from "express";
import { makePayment } from "../controllers/stripeController";
import { auth } from "../middlewares/auth";
const router = express.Router();

router.post("/makePayment", auth, makePayment);

export default router;
