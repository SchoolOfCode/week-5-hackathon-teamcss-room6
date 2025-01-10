import express from "express";

import { getEntries,
        getEntryById,
        createEntry,
        updateEntryById,
        deleteEntryById

} from "../controllers/journal-entries.js";

const router = express.Router();

router.get("/", getEntries); 
router.get("/:id", getEntryById);
router.post("/", createEntry);
router.patch("/:id", updateEntryById);
router.delete("/:id", deleteEntryById);

export default router;
