const db = require('./db');

// Function to get all departments
async function getAllDepartments() {
  try {
    const [rows, fields] = await db.query('SELECT * FROM department');
    return rows;
  } catch (error) {
    console.error('Error in getAllDepartments:', error);
    throw error;
  }
}