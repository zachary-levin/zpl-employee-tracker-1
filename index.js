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