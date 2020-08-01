const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

test('tests Intern object functionality', () => {
    const intern = new Intern('Joey')

    expect(intern.role).toBe('Intern')
    expect(intern.school).toBe('')
});