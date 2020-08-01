const Employee = require('../lib/Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name = '', id = '', email = '',) {
        super(name, id, email);
        this.role = 'Manager'
        this.officeNumber = ''
    }

    getOfficeNumber() {
        inquirer
            .prompt({
                type: 'text',
                name: 'office',
                message: "What is the Manager's office number?"
            })
            .then(({ office }) => {
                this.officeNumber = office;
                return `Manager's office number is ${this.officeNumber}`
            })
    };

    getRole() {
        this.role = 'Manager'
        return `About to enter information for ${this.role}`
    }

}

module.exports = Manager