import { model, Schema } from "mongoose";

const reviewSchema = new Schema({
  mediaId: Number,
  mediaType: String,
  title: String,
  review: String,
  rating: Number,
});

export const Review = model("Review", reviewSchema);
