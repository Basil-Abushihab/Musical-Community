import express from "express";
import {
  makeMusicalNoteListing,
  getAllMusicalNotes,
  getMusicalNoteByID,
  getPaginatedMusicalNotes,
  updateNoteData,
  deleteNote,
  approveOrRejectMusicalNoteListing,
  makeMusicalNoteReview,
} from "../controllers/musicalNotesController";
import { auth } from "../middlewares/auth";
import { processImages } from "../middlewares/imageProccessor";
import { uploadFiles } from "../middlewares/firebaseUpload";
import { getNoteCount } from "../models/MusicalNotes";
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
router.get("/getPaginatedMusicalNotes", auth, getPaginatedMusicalNotes);
router.put("/updateMusicalNote", auth, updateNoteData);
router.put("/deleteMusicalNote", auth, deleteNote);
router.put(
  "/approveOrRejectMusicalNoteListing",
  auth,
  approveOrRejectMusicalNoteListing
);
router.get("/getNoteCount", getNoteCount);
router.post("/makeIInstrumentReview", auth, makeMusicalNoteReview);
export default router;
