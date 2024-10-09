import express from "express";
import {
  makeMusicalNoteListing,
  getAllMusicalNotes,
  getMusicalNoteByID,
} from "../controllers/musicalNotesController";
import { auth } from "../middlewares/auth";
import { processImages } from "../middlewares/imageProccessor";
import { uploadFiles } from "../middlewares/firebaseUpload";

const router = express.Router();

router.post(
  "/makeMusicalNoteListing",
  auth,
  processImages,
  uploadFiles,
  makeMusicalNoteListing
);
router.get("/getAllMusicalNotes", getAllMusicalNotes);
router.get("/getMusicalNoteByID", auth, getMusicalNoteByID);

export default router;
