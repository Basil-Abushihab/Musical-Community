import axios from "../../../utils/axiosInstance";
import { useEffect } from "react";
import { useDispatch } from "@reduxjs/toolkit";
export const useMakeReview = (reviewData) => {
  const dispatch = useDispatch();
  const handleMakeReview = (e) => {
    e.preventDefault();
  };
};
