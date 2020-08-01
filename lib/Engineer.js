const Employee = require('../lib/Employee')
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '',) {
        super(name, id, email);
        this.role = 'Engineer'
        this.gitHub = ''
    }

    getGitHub() {
        inquirer
            .prompt({
                type: 'text',
                name: 'git',
                message: "What is the Engineer's gitHub username?"
            })
            .then(({ git }) => {
                this.gitHub = git;
                return `Engineer's gitHub username is ${this.gitHub}`
            })
    };

    getRole() {
        this.role = 'Engineer'
        return `About to enter information for ${this.role}`
    }

}

module.exports = Engineer;