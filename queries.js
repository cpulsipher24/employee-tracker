const inquirer = require('inquirer');
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
async function getAllEmployeesDetails() {
  try {
    const query = `
      SELECT
        employee.id,
        employee.first_name,
        employee.last_name,
        role.title AS job_title,
        department.name AS department,
        role.salary,
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM
        employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id
    `;
    const [rows, fields] = await db.query(query);
    return rows;
  } catch (error) {
    console.error('Error in getAllEmployeesDetails:', error);
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
  getAllEmployeesDetails,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
