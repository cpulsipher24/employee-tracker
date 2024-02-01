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

// Function to add a role
async function addRole(roleTitle, roleSalary, departmentId) {
  try {
    const [result] = await db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [roleTitle, roleSalary, departmentId]);
    return result.insertId; // Return the ID of the newly inserted role
  } catch (error) {
    console.error('Error in addRole:', error);
    throw error;
  }
}

// Function to add an employee
async function addEmployee(firstName, lastName, roleId, managerId) {
    try {
      const [result] = await db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
      return result.insertId; // Return the ID of the newly inserted employee
    } catch (error) {
      console.error('Error in addEmployee:', error);
      throw error;
    }
  }  

// Function to update an employee's role
async function updateEmployeeRole(employeeId, roleId) {
  try {
    const [result] = await db.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
    return result.affectedRows; // Return the number of affected rows
  } catch (error) {
    console.error('Error in updateEmployeeRole:', error);
    throw error;
  }
}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
