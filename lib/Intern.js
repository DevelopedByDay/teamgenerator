const Employee = require('../lib/Employee')
const inquirer = require('inquirer')

class Intern extends Employee {
    constructor(name = '', id = '', email = '',) {
        super(name, id, email);
        this.role = 'Intern'
        this.school = ''
    }

    getSchool() {
        inquirer
            .prompt({
                type: 'text',
                name: 'school',
                message: "What is the Intern's current school?"
            })
            .then(({ school }) => {
                this.school = school;
                return `Intern's current school is ${this.school}`
            })
    };

    getRole() {
        this.role = 'Intern'
        return `About to enter information for ${this.role}`
    }

}

module.exports = Intern;