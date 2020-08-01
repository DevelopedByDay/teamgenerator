const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

test('tests Manager object functionality', () => {
    const manager = new Manager('Karen')

    expect(manager.role).toBe('Manager')
    expect(manager.officeNumber).toBe('')
});