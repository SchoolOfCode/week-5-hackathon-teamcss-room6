// TICKET 5
// Serves the purpose of resetting and seeding the database with dummy data for initial testing
// Not following convention from the workshop of quering requests directly to the database with SQL commands
// Instead, creating a seperate commands.sql file that holds the SQL commands, and reading them using the fs package, storing them as a variable, and passing the commands as an argument to the DB query

// Import path, fs, pg
// define connection path to the DB
// Function that connects to the DB
// Read and execute the SQL file
// Handle errors in catch block
// Run the function
// Store in script and execute before beginning tests, or whenever we want to reset the DB
