import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
import { Response } from "express";
import { Instrument } from "../models/Instrument";
import { RegisterdUser } from "../models/RegisteredUser";
import { Review } from "../models/Reviews";
export const makeInstrumentListing = async (
  req: CustomRequest,
  res: Response
) => {
  const user = req.user;
  const urls = req.urls;
  const instrumentData = req.body;

  instrumentData.instrumentMedia = urls;
  instrumentData.posterID = user;
  try {
    const instrument = await new Instrument(instrumentData).save();
    const userToUpdate = await RegisterdUser.findByIdAndUpdate(user, {
      $push: { listedInstruments: instrument._id },
    });

    res.status(201).json({
      message: "Instrument Created Successfully",
      instrument: instrument,
      user: userToUpdate,
    });
  } catch (e) {
    res.status(501).json({ message: "Internal server error", error: e });
  }
};

export const getAllInstruments = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  try {
    const instruments = await Instrument.find()
      .where("posterID")
      .populate("posterID")
      .exec();
    res.status(200).json({
      message: "instruments fetched successfully",
      instruments: instruments,
    });
  } catch (e) {
    res.status(501).json({ message: "Internal server error", error: e });
  }
};

export const getInstrumentByID = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const { instrumentID } = req.query;
  console.log(instrumentID);
  try {
    const instrument = await Instrument.findById(instrumentID).populate(
      "posterID"
    );
    res.status(200).json({
      message: "note data fetched Successfully",
      instrument: instrument,
    });
  } catch (e) {
    console.log(e);
    res
      .status(501)
      .json({ message: "Internal server error", error: e.message });
  }
};

export const getPaginatedInstruments = async (
  req: CustomRequest,
  res: Response
) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  try {
    const paginatedInstruments = await Instrument.find()
      .skip(skip)
      .limit(limit)
      .populate("posterID");
    res.status(200).json({
      message: "data returned successfully",
      instruments: paginatedInstruments,
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Internal server error", error: e.message });
  }
};

export const updateInstrumentData = async (
  req: CustomRequest,
  res: Response
) => {
  const updatedData = req.body;
  try {
    const updatedInsturment = await Instrument.findByIdAndUpdate(
      updatedData.id,
      updatedData
    );
    res.status(201).json({
      message: "Instrument updated successfully",
      instrument: updatedInsturment,
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Internal server error", error: e.message });
  }
};

export const deleteInstrument = async (req: CustomRequest, res: Response) => {
  const instrumentID = req.body;
  try {
    const deletedInstrument = await Instrument.findByIdAndUpdate(instrumentID, {
      isDeleted: true,
    });
    res.status(201).json({
      message: "Instrument deleted successfully",
      instrument: deletedInstrument,
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Internal Server error", error: e.message });
  }
};

export const searchInstrument = async (req: CustomRequest, res: Response) => {
  const searchTerm: string | any = req.query;
  try {
    const searchResult = await Instrument.find({
      $text: { $search: searchTerm as string },
    });
    if (!searchResult) res.status(204).json({ message: "No content found" });
    else
      res.status(200).json({
        message: "Data retrieved successfully",
        searchResult: searchResult,
      });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Internal server error", error: e.message });
  }
};

export const filterInstrument = async (req: CustomRequest, res: Response) => {
  const { filterType, filterString } = req.body;
  try {
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Internal server error", error: e.message });
  }
};

export const approveOrRejectInstrumentListing = async (
  req: CustomRequest,
  res: Response
) => {
  const { instrumentID, isApproved } = req.body;
  try {
    console.log(isApproved);
    const instrument = await Instrument.findByIdAndUpdate(instrumentID, {
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

export const makeInstrumentReview = async (
  req: CustomRequest,
  res: Response
) => {
  const userID = req.user;
  const reviewData = req.body;
  const instrumentID = req.query;
  try {
    reviewData.poster = userID;
    const review = await new Review(reviewData).save();
    const instrument = await Instrument.findByIdAndUpdate(instrumentID, {
      reviews: review._id,
    });
    res
      .status(201)
      .json({
        message: "review made successfully",
        review: review,
        instrument: instrument,
      });
  } catch (e) {
    res.status(500).json({ message: "Internal server error", error: e });
  }
};
