const Employee = require('./Employee');

function Manager(github) {
    this.officeNumber = officeNumber;

    Manager.prototype = Object.create(Employee.prototype);

    Manager.prototype.getOfficeNumber = function() {
        if (this.officeNumber) {
            return {
                officeNumber: this.officeNumber
            };
        }
        return false;
    };

    Manager.prototype.getRole = function() {
        if (this.role) {
            return {
                role: 'Manager'
            };
        }
        return false;
    };
}

module.exports = Manager;