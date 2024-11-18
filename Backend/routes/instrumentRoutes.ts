import express from "express";
import {
  getInstrumentByID,
  makeInstrumentListing,
  getPaginatedInstruments,
  updateInstrumentData,
  approveOrRejectInstrumentListing,
  deleteInstrument,
  makeInstrumentReview,
} from "../controllers/instrumentController";
import { getInstrumentCount } from "../models/Instrument";
import { auth } from "../middlewares/auth";
import { processImages } from "../middlewares/imageProccessor";
import { uploadFiles } from "../middlewares/firebaseUpload";
import { getAllInstruments } from "../controllers/instrumentController";
const router = express.Router();

router.post(
  "/makeInstrumentListing",
  auth,
  processImages,
  uploadFiles,
  makeInstrumentListing
);
router.get("/getAllInstruments", getAllInstruments);
router.get("/getInstrumentByID", auth, getInstrumentByID);
router.get("/getPaginatedInstruments", auth, getPaginatedInstruments);
router.put("/updateInsturmentData", auth, updateInstrumentData);
router.put("/deleteInstrument", auth, deleteInstrument);
router.put(
  "/approveOrRejectInstrument",
  auth,
  approveOrRejectInstrumentListing
);
router.get("/getInstrumentCount", getInstrumentCount);
router.post("/makeIInstrumentReview", auth, makeInstrumentReview);
export default router;
