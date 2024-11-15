import express from "express";
import {
  makePaymentIntent,
  chargePayment,
} from "../controllers/stripeController";
import { processImage } from "../middlewares/imageProccessor";
import { auth } from "../middlewares/auth";
const router = express.Router();

router.post("/makePayment", auth, makePaymentIntent);
router.post("/chargePayment", auth, processImage, chargePayment);

export default router;
