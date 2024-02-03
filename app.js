const inquirer = require('inquirer');
const queries = require('./queries');
const db = require('./db');
const figlet = require('figlet');

// Function to display the app logo
function displayLogo() {
  console.log(figlet.textSync('Employee Tracker', 'Standard'));
}

// Main function to start the application
async function startApp() {
  displayLogo(); // Display the logo when the app is opened
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
  const employees = await queries.getAllEmployeesDetails();
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
  const { title, salary, department_id } = await inquirer.prompt([
    {
      name: 'title',
      type: 'input',
      message: 'Enter the title of the role:',
    },
    {
      name: 'salary',
      type: 'input',
      message: 'Enter the salary for the role:',
    },
    {
      name: 'department_id',
      type: 'input',
      message: 'Enter the department ID for the role:',
    },
  ]);

  await queries.addRole(title, salary, department_id);
  console.log(`Role "${title}" added successfully.`);
}

// Function to add an employee
async function addEmployee() {
  const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
    {
      name: 'first_name',
      type: 'input',
      message: "Enter the employee's first name:",
    },
    {
      name: 'last_name',
      type: 'input',
      message: "Enter the employee's last name:",
    },
    {
      name: 'role_id',
      type: 'input',
      message: "Enter the role ID for the employee:",
    },
    {
      name: 'manager_id',
      type: 'input',
      message: "Enter the manager ID for the employee (if applicable):",
    },
  ]);

  await queries.addEmployee(first_name, last_name, role_id, manager_id);
  console.log('Employee added successfully.');
}

// Function to update an employee role
async function updateEmployeeRole() {
  // Add logic to update employee role
  console.log('Employee role updated successfully.');
}

// Start the application
startApp();
