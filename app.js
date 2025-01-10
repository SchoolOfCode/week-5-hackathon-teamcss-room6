// Import the required modules
import express from "express";
import morgan from "morgan";

import entries from "./routes/journal-entries.js";
// import users from "./routes/users.js";

// Initialize the express app
const app = express();

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Add sub-routers
app.use("/entries", entries);

export default app;
