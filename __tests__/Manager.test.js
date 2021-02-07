const Manager = require('../lib/Manager.js');

jest.mock('../lib/Manager');
console.log(new Manager());

test('creates an manager', () => {
    manager = new Manager('myOfficeNumber');

    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toBeGreaterThan(0);
    expect(manager.email).toEqual(expect.any(String));
    
});