const Employee = require('../lib/Employee')

test('tests employee object functionality in creation and qualities of object', () => {
    const employee = new Employee('bob', 40, 'bob@work.com');

    expect(employee.name).toBe('bob');
    expect(employee.id).toBe(40);
    expect(employee.email).toBe('bob@work.com');
    expect(employee.getRole()).toBe('Employee');
}) 
