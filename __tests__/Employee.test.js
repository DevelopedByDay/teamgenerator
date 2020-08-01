const Employee = require('../lib/Employee')

test('tests employee object functionality', () => {
    const employee = new Employee('bob');

    expect(employee.name).toBe('bob');
    expect(employee.id).toBe('');
    expect(employee.email).toBe('');
    expect(employee.role).toBe('');
}) 