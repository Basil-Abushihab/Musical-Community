import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { fileInterface } from "./fileInterface";

export interface CustomRequest extends Request {
  user?: string | JwtPayload;
  file?: fileInterface;
  files?: { [fieldname: string]: fileInterface[] } | fileInterface[];
  urls?: string[];
}
