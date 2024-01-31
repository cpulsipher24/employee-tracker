const inquirer = require('inquirer');
const queries = require('./queries'); // Adjust the path if needed

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