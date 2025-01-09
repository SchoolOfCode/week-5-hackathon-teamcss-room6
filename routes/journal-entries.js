import express from "express";

import { getEntries } from "../controllers/journal-entries.js";

const router = express.Router();

router.get("/", getEntries); // Test route, need a function

export default router;
