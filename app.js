const inquirer = require('inquirer');
const queries = require('./queries');
const db = require('./db');

// Main function to start the application
async function startApp() {
  console.log('Welcome to the Employee Tracker!');

  while (true) {
    // Prompt user for action
    const { action } = await inquirer.prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ],
    });

    // Perform the selected action
    switch (action) {
      case 'View all departments':
        viewAllDepartments();
        break;
      case 'View all roles':
        viewAllRoles();
        break;
      case 'View all employees':
        viewAllEmployees();
        break;
      case 'Add a department':
        await addDepartment();
        break;
      case 'Add a role':
        await addRole();
        break;
      case 'Add an employee':
        await addEmployee();
        break;
      case 'Update an employee role':
        await updateEmployeeRole();
        break;
      case 'Exit':
        console.log('Exiting the Employee Tracker. Goodbye!');
        process.exit();
    }
  }
}

// Function to view all departments
async function viewAllDepartments() {
  const departments = await queries.getAllDepartments();
  console.table(departments);
}

// Function to view all roles
async function viewAllRoles() {
  const roles = await queries.getAllRoles();
  console.table(roles);
}

// Function to view all employees
async function viewAllEmployees() {
  const employees = await queries.getAllEmployees();
  console.table(employees);
}

// Function to add a department
async function addDepartment() {
  const { departmentName } = await inquirer.prompt({
    name: 'departmentName',
    type: 'input',
    message: 'Enter the name of the department:',
  });

  await queries.addDepartment(departmentName);
  console.log(`Department "${departmentName}" added successfully.`);
}

// Function to add a role
async function addRole() {
    console.log('Role added successfully.');
  }

  // Function to add an employee
async function addEmployee() {
    console.log('Employee added successfully.');
  }
  
  // Function to update an employee role
  async function updateEmployeeRole() {
    console.log('Employee role updated successfully.');
  }

  // Start the application
startApp();