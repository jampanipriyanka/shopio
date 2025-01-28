const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// console.log(process.env.DB_HOST)
// connection.connect((err) => {
//   if (err) console.log(err);
//   else console.log("MySQL is connected...");
// });

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : "angular-ecommerce-app",
  socketPath : "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect((err) => {
  if (err){
    console.error('Error connecting to MySQL:', err);
        return;
  };
  console.log("MySQL is connected...");
});
module.exports = connection;
