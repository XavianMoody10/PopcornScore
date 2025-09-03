import { Router } from "express";
import { Review } from "../models/reviews.model.js";

const router = Router();

router.post("/", async (req, res) => {
  const { mediaId, mediaType, title, review, rating } = req.body;

  try {
    if (!mediaId) {
      throw new Error("mediaId is required");
    }

    if (!mediaType) {
      throw new Error("mediaType is required");
    }

    if (!title) {
      throw new Error("Please enter a title");
    }

    if (!review) {
      throw new Error("Please give a review");
    }

    if (!rating) {
      throw new Error("Please add a rating");
    }

    await Review.create(req.body);
    const docs = await Review.find({ mediaId, mediaType });
    return res.send(docs);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message || "Error posting review");
  }
});

router.get("/", async (req, res) => {
  const { mediaId, mediaType } = req.query;

  try {
    const docs = await Review.find({ mediaId, mediaType });
    return res.send(docs);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message || "Error getting reviews");
  }
});

export default router;
