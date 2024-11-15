import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import adminAuthReducer from "../slices/adminAuthSlice";
import instrumentReducer from "../slices/instrumentSlice";
import musicalNoteReducer from "../slices/musicalNoteSlice";
import userReducer from "../slices/userSlice";
export const store = configureStore({
  reducer: {
    admin: adminAuthReducer,
    instrument: instrumentReducer,
    musicalNote: musicalNoteReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger),
});
