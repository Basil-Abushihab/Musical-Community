import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
import { Response } from "express";
import { Instrument } from "../models/Instrument";
import { RegisterdUser } from "../models/RegisteredUser";
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
  const user = req.user;
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
    res
      .status(200)
      .json({
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
