const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'cpulsipher',
  password: 'Collinp24',
  database: 'employee_tracker',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool for use in other modules
module.exports = pool.promise();
