const Intern = require('../lib/Intern')

test('tests Intern object functionality and object properties', () => {
    const intern = new Intern('Joey', 82, 'joeyb@university.edu','UWMadison')

    expect(intern.getRole()).toBe('Intern');
    expect(intern.school).toBe('UWMadison');
    expect(intern.getSchool()).toBe('UWMadison');
});