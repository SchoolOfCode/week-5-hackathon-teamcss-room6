/* Tasks
    1. fetchAllUsers ✅
    2. fetchUserById ✅
    3. createNewUser ✅
    4. updateUserInfo ✅
    5. updateUserPassword ✅
    6. deleteUserById ✅

    Goals ??
    - optional update user info depending on user choice (1 of either: userId, firstName, lastName, email)
    - optional update passwrord by either email or userid (depending on user)
        (& verify existing password before updating new password)
    - when deleting user, delete user journal entries too
    - hash user password on database
*/

import { pool } from "../db/dbConnect.js";

export async function fetchAllUsers() {
  const users = await pool.query("SELECT * FROM users");
  return users.rows;
}

export async function fetchUserById(userId) {
  const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
    userId,
  ]);
  return user.rows;
}

export async function createNewUser(
  firstName,
  lastName,
  email,
  password,
  dateJoined
) {
  const newUser = await pool.query(
    "INSERT INTO users (first_name, last_name, email, password, date_joined) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [firstName, lastName, email, password, dateJoined]
  );
  return newUser.rows;
}

// this would need to be optional, so can edit 1 thing depending on user choice
// so technically this could be update 1 OF EITHER: userId, firstName, lastName, email
export async function updateUserInfo(userId, firstName, lastName, email) {
  const updatedUser = await pool.query(
    "UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE user_id = $4 RETURNING *",
    [firstName, lastName, email, userId]
  );
  return updatedUser.rows;
}

// technically we can use email or userid to update password (whatever user has)
// we'd also want to verify existing password before updating new password
export async function updateUserPassword(userId, newPassword) {
  const updatedUser = await pool.query(
    "UPDATE users SET password = $1 WHERE user_id = $2 RETURNING *",
    [newPassword, userId]
  );
  return updatedUser.rows;
}

// also delete entries from table ??
export async function deleteUserByUserId(userId) {
  const deletedUser = await pool.query(
    "DELETE FROM users WHERE user_id = $1 RETURNING *",
    [userId]
  );
  return deletedUser.rows;
}

// CREATE TABLE users (
//     user_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//     first_name VARCHAR(255) NOT NULL,
//     last_name VARCHAR(255) NOT NULL,
//     email VARCHAR(50) NOT NULL,
//     password VARCHAR(225) NOT NULL,
//     date_joined DATE NOT NULL
//   );
