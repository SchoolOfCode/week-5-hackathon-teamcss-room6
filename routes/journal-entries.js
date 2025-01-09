import express from "express";

import { getAllEntries } from "../controllers/journal-entries.js";

const router = express.Router();

router.get("/", getAllEntries); // Test route, need a function

export default router;
