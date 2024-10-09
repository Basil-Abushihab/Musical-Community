import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlices/authSlice";
import logger from "redux-logger";
import userReducer from "../Slices/userSlices/userSlice";
import musicalNoteReducer from "../Slices/MusicalNoteSlice/musicalNoteSlice";
import instrumentReducer from "../Slices/instrumentSlice/instrumentSlice";
import paymentReducer from "../Slices/paymentSlice/paymentSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    instrument: instrumentReducer,
    musicalNote: musicalNoteReducer,
    payment: paymentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});