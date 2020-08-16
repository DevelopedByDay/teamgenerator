const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee')
const path = require('path');
const fs = require('fs');

const team = [];
const idList = [];

const directory = path.resolve(__dirname, 'directory')
const directoryRoute = path.join(directory, 'workgroup.html');

const generate = require('./src/template');



function start() {
    console.log("Welcome to your team builder!");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What office is the manager located in?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's meail address?"
        }
    ]).then(answers => {
        const teamManager = new Manager(answers.managerName, answers.managerID, answers.officeNumber, answers.managerEmail);
        team.push(teamManager);
        idList.push(answers.managerID);
        generateWorkGroup();
    });


    function generateWorkGroup() {

        inquirer.prompt([
        {
            type: "list",
            name: "employeeSelect",
            message: "Add one of the following team members.",
            choices: [
            "Engineer",
            "Intern",
            "Team completed."
            ]
        }
        ]).then(option => {
        switch (option.employeeSelect) {
            case "Engineer":
            generateEngineer();
            break;
            case "Intern":
            generateIntern();
            break;
            default:
            finishWorkGroup();
        }
        });
    }

    function generateEngineer() {
        inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's GitHub username?"
        }
        ]).then(answers => {
        const teamEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        team.push(teamEngineer);
        idList.push(answers.engineerId);
        generateWorkGroup();
        });
    }

    function generateIntern() {
        inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        }
        ]).then(answers => {
        const teamIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        team.push(teamIntern);
        idList.push(answers.internId);
        generateWorkGroup();
        });
    }

    function finishWorkGroup() {
        
        if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory)
        }
        fs.writeFileSync(directoryRoute, generate(team), "utf-8");
    }
}

start();

