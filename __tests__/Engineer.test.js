const Engineer = require('../lib/Engineer')

test('tests Engineer object functionality', () => {
    const engineer = new Engineer('Zerg', 32, 'zerg@work.com', 'zergRush');

    expect(engineer.github).toBe('zergRush');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGitHub()).toBe('zergRush');
})