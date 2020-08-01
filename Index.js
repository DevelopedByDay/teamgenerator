const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee')

function Staff() {
    this.employeeNumber = 0;
    this.employees = [];

    Staff.prototype.generateStaff = function() {
        this.employeeNumber++
        if (this.employeeNumber = 1) {
            const employee = new Employee()
            // not sure how to get this to work..
        }
    }
}


new Staff().generateStaff();

