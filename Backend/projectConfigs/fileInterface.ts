export interface fileInterface extends Express.Multer.File {
  mimetype: string;
  originalName?: string;
  buffer: Buffer | any;
}
