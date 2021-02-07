const Engineer = require('../lib/Engineer.js');

jest.mock('../lib/Engineer');
console.log(new Engineer());

test('creates an engineer', () => {
    engineer = new Engineer('github');

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toBeGreaterThan(0);
    expect(engineer.email).toEqual(expect.any(String));
    
});