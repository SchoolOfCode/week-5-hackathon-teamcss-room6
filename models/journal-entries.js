import { pool } from "../db/dbConnect.js";

/* Tasks
    1. fetchAllEntries ✅
    2. fetchEntryByUserId ✅
    3. insertEntry ✅
    4. editByEntryId ✅
    5. removerByEntryId ✅

    Goals ??
    - fetch by account, join method between user & entries table to return user info and entry info by user id or email
    - sort user entries by date
    - sort user entries by date range
    - encrypt entries on database for user privacy
*/
export async function fetchAllEntries() {
  const entries = await pool.query("SELECT * FROM entries");
  return entries.rows;
}

export async function fetchEntryByUserId(userId) {
  const userEntries = await pool.query(
    "SELECT * FROM entries WHERE user_id = $1",
    [userId]
  );
  return userEntries.rows;
}

//  inserts new entry using UserId
export async function insertEntry(userId, journalEntry, timeAdded) {
  const addedEntry = await pool.query(
    "INSERT INTO entries (user_id, journal_entry, time_added) VALUES ($1, $2, $3) RETURNING *",
    [userId, journalEntry, timeAdded]
  );
  return addedEntry.rows;
}

// only edits entry by entry id not user id
export async function editByEntryId(entryId, journalEntry, timeAdded) {
  const editedEntry = await pool.query(
    "UPDATE entries SET journal_entry = $1, time_added = $2 WHERE entry_id = $3 RETURNING *",
    [journalEntry, timeAdded, entryId]
  );
  return editedEntry.rows; // added rows to all returns by serge
}

// removes by entry id not user id
export async function removeByEntryId(entryId) {
  const removedEntry = await pool.query(
    "DELETE FROM entries WHERE entry_id = $1 RETURNING *",
    [entryId]
  );
  return removedEntry.rows;
}

//   entry_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//   user_id INTEGER REFERENCES users(user_id),
//   journal_entry VARCHAR(5000) NOT NULL,
//      DATE NOT NULL,
//   time_added TIMESTAMP NOT NULL
