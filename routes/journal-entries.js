import express from "express";

import {
  getAllEntries,
  getEntryById,
  postEntry,
  updateEntryById,
  deleteEntryById,
} from "../controllers/journal-entries.js";

const router = express.Router();

router.get("/", getAllEntries); // Test route, need a function
router.get("/:id", getEntryById);
router.post("/:id", postEntry);
router.patch("/:id", updateEntryById);
router.delete("/:id", deleteEntryById);

export default router;
