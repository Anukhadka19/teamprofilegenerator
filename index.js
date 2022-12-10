// Import HTML generating function
const generateHTML = require("./src/generateHTML");

// Application profiles
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Recap of node.js
const inquirer = require('inquirer');
const fs = require('fs');

const path = require('path');

// Array of questions for employee input 
const employees = []

function createteam() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'teamtype',
            message: 'What team member would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                'Quit'
            ]
        }
    ])
    .then(answers => {
            switch (answers.teamtype) {
                case "Engineer":
                    addEngineer()  
                    break;
            
                case "Intern":
                    addIntern()
                    break;
            
                case "Quit":
                    addTeam() 
                        break;
                 
                default:
                    break;
            }
        })
}

// Inquirer for employees and function that runs the inquirer 

    function addManager() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the manager name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employee id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address.',
            },
            {
                type: 'input',
                name: 'office',
                message: 'Enter your office number.',
            },
            ])
            
            .then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
                employees.push(manager)
                
                createteam()
            })
    }

    function addEngineer() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineer name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employee id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address.',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your Github username.',
            },
            ])
            
            .then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                employees.push(engineer)
                
                createteam()
            })
    }

    function addIntern() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employee id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address.',
            },
            {
                type: 'input',
                name: 'education',
                message: 'Enter your school name.',
            },
            ])
            
            .then(answers => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.education)
                employees.push(intern)
                
                createteam()
            })
    }

    function addTeam() {
    fs.writeFileSync(
        path.join(path.resolve(__dirname, 'dist'), 'team.html'),
        generateHTML(employees),
        "utf-8"
    )
    }
    
    addManager()
    
