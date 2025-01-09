import {
  // importing sumeya's functions
  fetchAllEntries,
  fetchEntryByUserId,
  insertEntry,
  editByEntryId,
  removeByEntryId,
} from "../models/journal-entries.js";

export async function getAllEntries(req, res) {
  // Try catch block
  try {
    const entries = await fetchAllEntries();

    res.status(200).json({
      // Updates status code, following Jsend specifications when sending data
      status: "success",
      data: entries,
    });
  } catch (error) {
    // Handle errors, send status code, error message in Jsend
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

export async function getEntryById(req, res) {
  try {
    const id = req.params.id;
    const entry = await fetchEntryByUserId(id);

    res.status(200).json({
      status: "success",
      data: entry,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

export async function postEntry(req, res) {
  try {
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
