import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/list", async (req, res) => {
  const { list, page } = req.query;

  const url = `https://api.themoviedb.org/3/tv/${list}`;

  try {
    const response = await axios.get(url, {
      params: {
        language: "en-US",
        page,
      },
      headers: {
        Authorization: process.env.API_KEY,
      },
    });
    res.send(response.data);
  } catch (error) {
    const status = error?.response?.status;
    const data = error?.response?.data;
    res.status(status || 400).send("Error getting TV shows list");
    console.log(data);
  }
});

export default router;
