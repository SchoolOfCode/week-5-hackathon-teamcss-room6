import pg from "pg";

// Retrieve database connection string
const connectionString = process.env.DB_CONNECTION_STRING;

// Checking if string is valid. If undefined, throw error
if (!connectionString) {
  throw new Error(
    "No DB_CONNECTION_STRING defined. Did you load your environment variable?"
  );
}

// Sets up connection pool for postgres DB
export const pool = new pg.Pool({
  // new instance of pg connection
  connectionString, // defining connection URL store in environment variables. Way to connect to render DB
  ssl: {
    // secure sockets layer encrypts connection between app and DB for security
    rejectUnauthorized: false, // disabled strict verification. REVIEW THIS for production environments.
  },
});
