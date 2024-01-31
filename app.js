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
    