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

// Function to get all roles
async function getAllRoles() {
    try {
      const [rows, fields] = await db.query('SELECT * FROM role');
      return rows;
    } catch (error) {
      console.error('Error in getAllRoles:', error);
      throw error;
    }
  }
  
  // Function to get all employees
  async function getAllEmployees() {
    try {
      const [rows, fields] = await db.query('SELECT * FROM employee');
      return rows;
    } catch (error) {
      console.error('Error in getAllEmployees:', error);
      throw error;
    }
  }

  // Function to add a department
async function addDepartment(departmentName) {
    try {
      const [result] = await db.query('INSERT INTO department (name) VALUES (?)', [departmentName]);
      return result.insertId; // Return the ID of the newly inserted department
    } catch (error) {
      console.error('Error in addDepartment:', error);
      throw error;
    }
  }
  