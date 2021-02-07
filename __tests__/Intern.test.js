const Intern = require('../lib/Intern.js');

jest.mock('../lib/Intern');
console.log(new Intern());

test('creates an intern', () => {
    intern = new Intern('mySchool');

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toBeGreaterThan(0);
    expect(intern.email).toEqual(expect.any(String));
    
});