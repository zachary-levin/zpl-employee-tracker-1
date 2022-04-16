const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

const connection = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    database: 'employee_db',
    password: 'PotBuster132!' 
});
// Print "Connected!" when 'node index.js' is executed in terminal
connection.connect(function(err) {
    if (err) throw err
    console.log('Connected!')
});

// Inquirer prompts
const promptUser = () => {
     inquirer.prompt([
        {
            type: 'list',
            name: 'initialOptions',
            message: 'What would you like to do?',
            choices: [
            'View All Departments', 
            'View All Roles', 
            'View All Employees', 
            'Add Department', 
            'Add Role', 
            'Add Employee', 
            'Update an Existing Employee',
            'Quit'
            ]
        },
    ]).then(initialOptionsData => {
        switch(initialOptionsData.initialOptions) {
            case 'View All Departments':
                renderAllDepartments();
                break;
            
            case 'View All Roles':
                renderAllRoles();
                break;
            
            case 'View All Employees':
                renderAllEmployees();
                break;

            case 'Add Department':
                renderAddedDepartment();
                break;

            case 'Add Role':
                renderAddedRole();
                break;
            
            case 'Add Employee':
                renderAddedEmployee();
                break;
            
            case 'Update an Existing Employee':
                renderUpdatedEmployee();
                break;

            case 'Quit':
                process.exit();
        }

    })
}

// Start prompt
promptUser();

// renders all departments
const renderAllDepartments = () => {
    //Run query to get all departments
    const sql = `SELECT * FROM department`;

   connection.query(sql, (err, res) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        // Console.table results of #1
        console.table(res);
    });

    // Loops back to starting prompt
    promptUser();
}

// renders all roles
const renderAllRoles = () => {
    // Run query to get all roles
    const sql = `SELECT * FROM role`;

    connection.query(sql, (err, res) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        // Console.table results of #2
        console.table(res);
    });

    // Loops back to starting prompt
    promptUser();
} 

// renders all employees
const renderAllEmployees = () => {
    // Run query to get all employees
    const sql = `SELECT * FROM employee`;

    connection.query(sql, (err, res) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        // Console.table results of #3
        console.table(res);
    });

    // Loops back to starting prompt
    promptUser();
} 

// renders added department
const renderAddedDepartment = () => {
    // Run query to add(post) a department
    
    //const sql = `INSERT INTO () FROM employee`;

    /*
    connection.query(sql, (err, res) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        // Console.table results of #4
        console.table(res);
    });
    */

    // Loops back to starting prompt
    promptUser();
} 

// renders added role
const renderAddedRole = () => {
    // Run query to add(post) a role

    // Console.table results of #5

    // Loops back to starting prompt
    promptUser();
} 

// renders added employee
const renderAddedEmployee = () => {
    // Run query to get add(post) an employee

    // Console.table results of #6

    // Loops back to starting prompt
    promptUser();
} 

// renders updated employee
const renderUpdatedEmployee = () => {
    // Run query to update(put) an employee

    // Console.table results of #7

    // Loops back to starting prompt
    promptUser();
} 


// Create inquirer prompts:
// 1. Prompt for adding a department
// Department: Prompt to enter the name of the department and that department is added to the database

// 2. Prompt for adding a role
// Role: Prompt to enter the name, salary, and department for the role and that role is added to the database

// 3. Prompt for adding an employee
// Employee: Prompt to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// 4. Prompt to update an employee role
// Update an Employee role: Prompt to select an employee to update and their new role and this information is updated in the database