const Employee = require('./Employee');

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