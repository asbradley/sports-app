const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: 'Fishcubob1!',  // enter your MySQL password
  database: 'sports_application_db',           // name of the schema you created
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection
pool.getConnection((err, connection) => {
    if (err) {
      console.error('Database connection failed:', err);
    } else {
      console.log('Connected to MySQL database.');
      connection.release();
    }
  });
  
  module.exports = pool;