import express from "express";
import cors from "cors";
import { connectToDatabase } from "./src/config/database.config.js";
import { initiatMockServiceWorker } from "./src/mocks/node.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Start Mock Service Worker
initiatMockServiceWorker();

// Server
app.listen(PORT, () => {
  console.log("Server has started on port " + PORT);

  // Connect to database (MongoDB\Mongoose)
  connectToDatabase();
});
