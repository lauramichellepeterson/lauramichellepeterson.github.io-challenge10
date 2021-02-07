const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee');
console.log(new Employee());

test('creates an employee', () => {
    employee = new Employee('name', 1, 'email', 'role');
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toBeGreaterThan(0);
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test("gets employee data as an object", () => {
    const employee = new Employee('Dave');
  
    expect(employee.getRole()).toHaveProperty('role');

    // expect(employee.getData()).toHaveProperty('name');
    // expect(employee.getData()).toHaveProperty('id');
    // expect(employee.getData()).toHaveProperty('email');
    // expect(employee.getData()).toHaveProperty('role');
});