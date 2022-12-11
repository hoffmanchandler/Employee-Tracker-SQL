const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
// const connection = require('mysql2/typings/mysql/lib/Connection');
// const { listenerCount } = require('mysql2/typings/mysql/lib/Connection');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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

  function viewDepartments() {
    //console.table('department');
    let query = "SELECT * FROM department"
    Connection.query(query, function(err, res) {
      if (err) console.log('error');
      console.table(res);
      startApp();
    })
  }

  function viewRoles() {

  }

  function viewEmployees() {

  }

  function addDepartment() {

  }

  function addRole() {
    
  }

  function addEmployee() {

  }

  function updateRole() {

  }

  startApp()
  .then( answers => {
    console.log('answers is', answers);
    if (userSelection == 'view all departments') {
      viewDepartments();
      return;
    } else if (answer == 'view all roles') {
      viewRoles();
    } else if (answer == 'view all employees') {
      viewEmployees();
    } else if (answer == 'add a department') {
      addDepartment();
    } else if (answer == 'add a role') {
      addRole();
    } else if (answer == 'add an employee') {
      addEmployee();
    } else if (answer == 'update an employee role') {
      updateRole();
    }
  })

