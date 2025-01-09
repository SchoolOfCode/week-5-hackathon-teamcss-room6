import express from "express";

import {
  getAllEntries,
  getEntryById,
  postEntry,
} from "../controllers/journal-entries.js";

const router = express.Router();

router.get("/", getAllEntries); // Test route, need a function
router.get("/:id", getEntryById);
router.post("/:id", postEntry);

export default router;
