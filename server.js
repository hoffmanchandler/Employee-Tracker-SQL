const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
// const { listenerCount } = require('mysql2/typings/mysql/lib/Connection');

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password:'Godo21!?',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

// const connection = mysql.createConnection({
//     host: '',
//     user: '',
//     database: ''
//   });

const initalQ = [
    {
        type: "list",
        name: "userSelection",
        message: "What would you like to do?",
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],    
        default: 'view all departments',
    }
]

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     initalQ
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     console.log('answers looks like', answers)
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

  function startApp() {
    return inquirer.prompt(initalQ);
  }

  startApp()
  .then( answers => {
    console.log('answers is', answers);
  })