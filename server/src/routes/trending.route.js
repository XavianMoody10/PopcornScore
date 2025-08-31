import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/movies", async (req, res) => {
  const url = "https://api.themoviedb.org/3/trending/movie/day";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });
    res.send(response.data);
  } catch (error) {
    const status = error?.response?.status;
    const data = error?.response?.data;
    res.status(status || 400).send("Error getting trending movies");
    console.log(data);
  }
});

router.get("/tv_shows", async (req, res) => {
  const url = "https://api.themoviedb.org/3/trending/tv/day";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });
    res.send(response.data);
  } catch (error) {
    const status = error?.response?.status;
    const data = error?.response?.data;
    res.status(status || 400).send("Error getting trending TV shows");
    console.log(data);
  }
});

export default router;
