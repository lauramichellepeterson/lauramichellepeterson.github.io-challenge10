const Employee = require('./Employee');

function Intern(school) {
    this.school = school;

    Intern.prototype = Object.create(Employee.prototype);

    Intern.prototype.getSchool = function() {
        if (this.school) {
            return {
                school: this.school
            };
        }
        return false;
    };

    Intern.prototype.getRole = function() {
        if (this.role) {
            return {
                role: 'Intern'
            };
        }
        return false;
    };
}

module.exports = Intern;