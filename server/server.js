import express from "express";
import cors from "cors";
import { connectToDatabase } from "./src/config/database.config.js";
import { initiatMockServiceWorker } from "./src/mocks/node.js";
import trendingRoute from "./src/routes/trending.route.js";
import moviesRoute from "./src/routes/movies.route.js";
import tvShowsRoute from "./src/routes/tvShows.route.js";
import reviewsRoute from "./src/routes/reviews.route.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/trending", trendingRoute);
app.use("/movies", moviesRoute);
app.use("/tv_shows", tvShowsRoute);
app.use("/review", reviewsRoute);

// Start Mock Service Worker
initiatMockServiceWorker();

// Server
app.listen(PORT, () => {
  console.log("Server has started on port " + PORT);

  // Connect to database (MongoDB\Mongoose)
  connectToDatabase();
});
