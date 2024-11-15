import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
import { Response } from "express";
import { RegisterdUser } from "../models/RegisteredUser";
import { MusicalNote } from "../models/MusicalNotes";
export const makeMusicalNoteListing = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const user = req.user;
  const musicalNoteData = req.body;
  const urls = req.urls;
  musicalNoteData.musicalScore = urls![0];
  musicalNoteData.noteMedia = urls![1];
  musicalNoteData.posterID = user;
  try {
    const musicalNote = await new MusicalNote(musicalNoteData).save();
    const userToUpdate = await RegisterdUser.findByIdAndUpdate(user, {
      $push: { listedMusicalNotes: musicalNote._id },
    });
    res.status(201).json({
      message: "musical note request sent successfully",
      user: userToUpdate,
      musicalNote: musicalNote,
    });
  } catch (e) {
    res.status(501).json({ message: "Internal server error", error: e });
  }
};

export const getAllMusicalNotes = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  try {
    const musicalNotes = await MusicalNote.find().populate("posterID").exec();
    res.status(200).json({
      message: "Musical notes fetched successfully",
      musicalNotes: musicalNotes,
    });
  } catch (e) {
    res.status(501).json({ message: "Internal server error", error: e });
  }
};

export const getMusicalNoteByID = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const { noteID } = req.query;
  try {
    const note = await MusicalNote.findById(noteID).populate("posterID");
    res
      .status(200)
      .json({ message: "note data fetched Successfully", note: note });
  } catch (e) {
    console.log(e);
    res.status(501).json({ message: "Internal server error", error: e });
  }
};

export const getPaginatedMusicalNotes = async (
  req: CustomRequest,
  res: Response
) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  try {
    const paginatedMusicalNotes = MusicalNote.find().skip(skip).limit(limit);
    res.status(200).json({
      message: "Musical notes returned successfully",
      musicalNotes: paginatedMusicalNotes,
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: e.message });
  }
};

export const updateNoteData = async (req: CustomRequest, res: Response) => {
  const updatedData = req.body;
  try {
    const updatedNote = await MusicalNote.findByIdAndUpdate(
      updatedData.id,
      updatedData
    );
    res.status(201).json({
      message: "Instrument updated successfully",
      musicalNote: updatedNote,
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Internal server error", error: e.message });
  }
};

export const deleteNote = async (req: CustomRequest, res: Response) => {
  const instrumentID = req.body;
  try {
    const deletedNote = await MusicalNote.findByIdAndUpdate(instrumentID, {
      isDeleted: true,
    });
    res.status(201).json({
      message: "Instrument deleted successfully",
      musicalNote: deletedNote,
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Internal Server error", error: e.message });
  }
};

export const approveOrRejectMusicalNoteListing = async (
  req: CustomRequest,
  res: Response
) => {
  const { noteID, isApproved } = req.body;
  try {
    const instrument = await MusicalNote.findByIdAndUpdate(noteID, {
      isApproved: isApproved,
    });
    res.status(201).json({ instrument: instrument });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Internal server error", error: e.message });
  }
};
