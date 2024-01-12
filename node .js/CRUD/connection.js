const mysql = require("mysql2");

// Define the name of the database as a string
const employeedb = "employeedb";

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: employeedb, // Use the defined employeedb variable here
});

// Check whether the connection is established or not
mysqlConnection.connect((err) => {
  if (err) {
    // Fix the typo here (change 'arr' to 'err')
    console.log("Error Connection:", JSON.stringify(err, undefined, 2));
  } else {
    console.log("We Are Connected...");
  }
});

//aaba yo purai module lai export garne index.js ma
module.exports = mysqlConnection;
