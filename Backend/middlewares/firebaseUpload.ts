import { storage } from "../projectConfigs/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Response, NextFunction, RequestHandler } from "express";
import { CustomRequest } from "../projectConfigs/expressObjectsConfig";

export const uploadFile: RequestHandler = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const timeStamp = Date.now();
  const user = req.user;
  const file = req.file;
  if (!file || !file.buffer) {
    res
      .status(400)
      .json({ message: "No file provided or file buffer is missing." });
  }

  const fileRef = ref(storage, `/images/${user}-${timeStamp}`);
  await uploadBytes(fileRef, file?.buffer, { contentType: file?.mimetype });

  const url = await getDownloadURL(fileRef);
  req.url = url;
  next();
};

export const uploadFiles: RequestHandler = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const timeStamp = Date.now();
  const user = req.user;
  const files = req.files;
  let urls: string[] = [];

  if (!files) {
    res.status(400).json({ message: "No file provided" });
  }

  if (Array.isArray(files)) {
    for (let i = 0; i < files.length; i++) {
      const fileRef = ref(storage, `/images/${user}-${timeStamp}-${i}`);

      await uploadBytes(fileRef, files[i].buffer, {
        contentType: files[i].mimetype,
      });

      const url = await getDownloadURL(fileRef);
      urls.push(url);
    }

    req.urls = urls;
  }

  next();
};
