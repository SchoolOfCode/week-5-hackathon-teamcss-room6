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
  // kind of works but format of entries is awkward
  // Also unable to create a new entry for an unregistered user, which makes sense
  try {
    // Sumeya's function takes 4 paramteres originally
    // Removed one parameter (entry ID) as it is auto generated in the SQL table
    // Last 3 parameters are user_id, journal_entry, time_added

    //user_id
    let userId = parseInt(req.params.id); // placeholder for now, as we need to rethink how we are adding this in the database. Hard coding IDs in sql commands, so no way to increment this. Maybe this is okay for now and we just have a req parameter in the endpoint?

    // Journal_entry nice and easy
    let newEntry = req.body;

    // time_added
    // Shoutout to snir on stackoverflow 2015
    // this is giving errors as it retuns hours:mins:seconds
    // SQL wants format of year:month:days hours:mins:seconds
    let currentTime = new Date().toLocaleTimeString();

    let date = new Date();
    let correctDateFormat =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate();

    let correctFormat = correctDateFormat + " " + currentTime;

    const postNewEntry = await insertEntry(userId, newEntry, correctFormat);

    res.status(201).json({
      status: "success",
      data: postNewEntry,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

export async function updateEntryById(req, res) {
  try {
    // Sumeya's function takes 3 parameters

    let updatedEntry = req.body; // Formatting will be awkward again, so fix here and in post

    // Time added same as above
    let currentTime = new Date().toLocaleTimeString();

    let date = new Date();
    let correctDateFormat =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    let correctFormat = correctDateFormat + " " + currentTime;

    // entry_id can simply be the req.param
    let entryToUpdate = req.params.id;

    console.log(correctFormat);

    // I was getting errors because of correctFormat being M D rather than MM DD, then they just dissappeared and now it works?
    let patchEntry = await editByEntryId(
      entryToUpdate,
      updatedEntry,
      correctFormat
    );

    res.status(200).json({
      status: "success",
      data: patchEntry,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

export async function deleteEntryById(req, res) {
  try {
    const entryId = req.params.id;

    let deletedEntry = await removeByEntryId(entryId);

    res.status(200).json({
      status: "success",
      data: deletedEntry,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
