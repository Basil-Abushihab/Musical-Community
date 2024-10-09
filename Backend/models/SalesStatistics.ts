import { Schema, model } from "mongoose";

const salesStatisticsScehma = new Schema({
  instrumentsSold: Number,
  notesSold: Number,
  instrumentsSales: Number,
  notesSales: Number,
  totalSales: Number,
  averageTotalSales: Number,
});

export const SalesStatistics = model("SalesStatistics", salesStatisticsScehma);
