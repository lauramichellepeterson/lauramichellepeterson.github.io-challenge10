const Employee = require('./Employee');

// ES6 constructor
class Intern  extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }

    getSchool() {
        if (this.school) {
            return {
                school: this.school
            };
        }
        return false;
    }

    getRole() {
        if (this.role) {
            return {
                role: 'Intern'
            };
        }
        return false;
    };

}

module.exports = Intern;