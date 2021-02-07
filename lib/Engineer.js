const Employee = require('./Employee');

// function Engineer(github) {
//     this.github = github;

//     Engineer.prototype = Object.create(Employee.prototype);

//     Engineer.prototype.getGithub = function() {
//         if (this.github) {
//             return {
//                 github: this.github
//             };
//         }
//         return false;
//     };

//     Engineer.prototype.getRole = function() {
//         if (this.role) {
//             return {
//                 role: 'Engineer'
//             };
//         }
//         return false;
//     };
// }

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github;
    }

    getGithub() {
        if (this.github) {
            return {
                github: this.github
            };
        }
        return false;
    }

    getRole() {
        if (this.role) {
            return {
                role: 'Engineer'
            };
        }
        return false;
    };

}

module.exports = Engineer;