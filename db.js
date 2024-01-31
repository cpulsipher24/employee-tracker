const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'your_database_host',
  user: 'cpusipher',
  password: 'Collinp24',
  database: 'your_database_name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool for use in other modules
module.exports = pool.promise();
