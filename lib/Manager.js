const Employee = require('./Employee');

// function Manager(officeNumber) {
//     this.officeNumber = officeNumber;

//     Manager.prototype = Object.create(Employee.prototype);

//     Manager.prototype.getOfficeNumber = function() {
//         if (this.officeNumber) {
//             return {
//                 officeNumber: this.officeNumber
//             };
//         }
//         return false;
//     };

//     Manager.prototype.getRole = function() {
//         if (this.role) {
//             return {
//                 role: 'Manager'
//             };
//         }
//         return false;
//     };
// }

class Manager {
    constructor(officeNumber) {
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