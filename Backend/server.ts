// server imports
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import mongoose from "./projectConfigs/dbConfig";
import userRoutes from "./routes/userRoutes";
import instrumentRouter from "./routes/instrumentRoutes";
import musicalNoteRouter from "./routes/musicalNoteRoutes";
import paymentRoutes from "./routes/stripeRoutes";
import adminRoutes from "./routes/adminRoutes";
import compression from "compression";
dotenv.config();

const app = express();
const port: number = parseInt(process.env.SERVER_PORT || "3000", 10);
mongoose.connect;

/*
Middlewares Definition Starting with:
 - CORS configuration for cookie authentication
 - Body and cookie parsers to extract the data from both cookies and body
*/

const corsConfig = {
  credentials: true,
  origin: ["http://localhost:3000", "http://localhost:5173"],
};

app.use(compression());
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(cookieParser());

/* Defining server routes which includes:

    -authRoutes for users.
    -userRoutes
    -instrumentRoutes
    -musicalNotesRoutes

*/
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/instruments", instrumentRouter);
app.use("/api/musicalNotes", musicalNoteRouter);
app.use("/api/payments", paymentRoutes);
app.use("/api/admins", adminRoutes);

/* Server run */
app.listen(port, () => {
  console.log(`Running on port http://localhost:${port}`);
});
