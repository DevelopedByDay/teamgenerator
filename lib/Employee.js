const inquirer = require('inquirer');

class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = '';
        this.email = '';
        this.role = ''
        this.employeeNumber = 0
    }

    getName() {
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: "What is the employee's name?"
            })
            .then(( { name }) => {
                this.name = name
                return `Employee's name is ${this.name}`
            })
            .then(getID())
        

    }

    getID() {
        inquirer
            .prompt({
                type: 'text',
                name: 'id',
                message: "What is the employee's ID?"
            })
            .then(( { id }) => {
                this.id = id
                return `Employee's ID is ${this.id}`
            })
            .then(getEmail())
        
    }

    getEmail() {
        inquirer
            .prompt({
                type: 'text',
                name: 'email',
                message: "What is the employee's email address?"
            })
            .then(({ email }) => {
                this.email = email
                return `Employee's email is ${this.email}`
            })
        
    }

    getRole() {
        
    }
}

module.exports = Employee;