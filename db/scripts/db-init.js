// TICKET 5
// Serves the purpose of resetting and seeding the database with dummy data for initial testing
// Not following convention from the workshop of quering requests directly to the database with SQL commands
// Instead, creating a seperate commands.sql file that holds the SQL commands, and reading them using the fs package, storing them as a variable, and passing the commands as an argument to the DB query
import { pool } from "../dbConnect.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS users CASCADE;
      DROP TABLE IF EXISTS entries CASCADE;
      DROP TABLE IF EXISTS authors CASCADE;
      DROP TABLE IF EXISTS books CASCADE;
    `);

    // Create the user table
    await pool.query(`
      CREATE TABLE users (
        user_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(225) NOT NULL,
        date_joined DATE NOT NULL
      );
    `);

    // Create the books table with a foreign key to the authors table
    await pool.query(`
      CREATE TABLE entries (
        entry_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        user_id INTEGER REFERENCES users(user_id),
        journal_entry VARCHAR(5000) NOT NULL,
        date_added DATE NOT NULL,
        time_added TIMESTAMP NOT NULL
        
      );
    `);

    // Seed the user table
    await pool.query(`
  INSERT INTO users (first_name, last_name, email, password, date_joined)
  VALUES 
    ('Emma', 'Johnson', 'emma.johnson@example.com', 'P@ssword123', '2024-03-15'),
    ('Liam', 'Brown', 'liam.brown@example.com', 'Li@mB2024!', '2024-07-23'),
    ('Olivia', 'Davis', 'olivia.davis@example.com', 'Ol!v1a2023$', '2023-12-10'),
    ('Noah', 'Garcia', 'noah.garcia@example.com', 'N0ah@G1234', '2024-09-05'),
    ('Sophia', 'Martinez', 'sophia.martinez@example.com', 'Soph!@2023', '2024-01-02')
`);

    // Seed the entries table
    await pool.query(`
  INSERT INTO entries (user_id, journal_entry, date_added, time_added)
  VALUES 
  (1, 'Started a new project at work today, feeling excited!', '2024-03-15', '2024-03-15 10:30:45'),
  (1, 'Had a productive meeting with the team.', '2024-03-16', '2024-03-16 14:20:10'),  
  (1, 'Took a long walk in the park after work.', '2024-03-17', '2024-03-17 18:45:32'), 
  (2, 'Finally finished reading that book on leadership!', '2024-07-23', '2024-07-23 09:15:00'),
  (2, 'Had a great workout at the gym this morning.', '2024-07-24', '2024-07-24 07:45:21'),
  (2, 'Tried a new recipe for dinner – turned out amazing!', '2024-07-25', '2024-07-25 19:30:00'),
  (3, 'Visited the art gallery downtown – inspiring pieces!', '2023-12-10', '2023-12-10 11:05:45'),
  (3, 'Enjoyed coffee with an old friend after months.', '2023-12-11', '2023-12-11 16:20:11'),
  (3, 'Finished a challenging puzzle with the family.', '2023-12-12', '2023-12-12 20:50:55'),
  (4, 'Caught up on emails and got through my to-do list.', '2024-09-05', '2024-09-05 08:45:30'),
  (4, 'Went for a jog by the lake – felt so refreshing!', '2024-09-06', '2024-09-06 06:30:15'),
  (4, 'Watched a documentary on space exploration.', '2024-09-07', '2024-09-07 21:15:10'),
  (5, 'Started learning a new language – very rewarding!', '2024-01-02', '2024-01-02 10:00:00'),
  (5, 'Tried yoga for the first time – surprisingly relaxing.', '2024-01-03', '2024-01-03 08:20:00'),
  (5, 'Wrote in my journal about plans for the year.', '2024-01-04', '2024-01-04 21:00:30')
`);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
