const Employee = require('./Employee');

class Manager extends Employee  {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        if (this.officeNumber) {
            return {
                officeNumber: this.officeNumber
            };
        }
        return false;
    }

    getRole() {
        if (this.role) {
            return {
                role: 'Manager'
            };
        }
        return false;
    };

}

module.exports = Manager;