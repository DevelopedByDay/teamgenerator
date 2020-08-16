const Manager = require('../lib/Manager')

test('tests Manager object functionality and object properties', () => {
    const manager = new Manager('Karen', 1, 'karen@work.com', 642);

    expect(manager.getRole()).toBe('Manager');
    expect(manager.officeNumber).toBe(642);
    expect(manager.getOfficeNumber()).toBe(642);
});