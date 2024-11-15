import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { CustomRequest } from "../projectConfigs/expressObjectsConfig";
dotenv.config();

export function auth(req: CustomRequest, res: Response, next: NextFunction) {
  const cookie = req.cookies;
  const secret: string = process.env.SECRET || "";

  if (!secret) throw "secret is undefined";
  try {
    const token = cookie.token;
    if (!token) {
      res.status(401).json({ message: "Unauthorized access" });
    }
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: "Unautorized access", error: e });
  }
}
