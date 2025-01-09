import { pool } from "../db/dbConnect.js";

export async function fetchAllEntries() {
  const result = await pool.query("SELECT * FROM entries");
  return result.rows;
}
