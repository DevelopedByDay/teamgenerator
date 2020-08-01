const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

test('tests Engineer object functionality', () => {
    const engineer = new Engineer('Zerg')

    expect(engineer.role).toBe('Engineer')
    expect(engineer.gitHub).toBe('')
})