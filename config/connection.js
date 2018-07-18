// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "Burger_db",
  socketPath:"/Applications/MAMP/tmp/mysql/mysql.sock"
});
}
connection.connect();
// Make connection.
module.exports = connection;

