const inquirer = require('inquirer');
const ctable = require('console.table');
const mysql = require('mysql2');
const connection = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    database: 'employee_db',
    password: 'PotBuster132!' 
});
connection.connect(function(err) {
    if (err) throw err
    console.log('Connected!')
});

// Create inquirer prompts:
// 1. Prompt for adding a department
// Department: Prompt to enter the name of the department and that department is added to the database

// 2. Prompt for adding a role
// Role: Prompt to enter the name, salary, and department for the role and that role is added to the database

// 3. Prompt for adding an employee
// Employee: Prompt to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// 4. Prompt to update an employee role
// Update an Employee role: Prompt to select an employee to update and their new role and this information is updated in the database