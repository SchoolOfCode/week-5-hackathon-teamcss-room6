import { fetchAllEntries } from "../models/journal-entries.js";

export async function getEntries(req, res) {
  const data = await fetchAllEntries();
  res.send(data);
}
