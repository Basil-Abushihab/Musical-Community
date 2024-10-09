import multer, { memoryStorage } from "multer";
const storage = memoryStorage();

export const processImage = multer({
  storage: storage,
}).single("file");

export const processImages = multer({
  storage: storage,
}).array("files");
