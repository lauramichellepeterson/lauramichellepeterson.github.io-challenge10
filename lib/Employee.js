// function Employee(name, id, email, role) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.role = role;

//     Employee.prototype.getData = function() {
//         return {
//             name: this.name,
//             id: this.id,
//             email: this.email,
//             role: this.role
//         };
//     };
      
//     Employee.prototype.getEmail = function() {
//         if (this.email) {
//             return {
//                 email: this.email
//             };
//         }
//         return false;
//     };

//     Employee.prototype.getName = function() {
//         if (this.name) {
//             return {
//                 name: this.name
//             };
//         }
//         return false;
//     };

//     Employee.prototype.getId = function() {
//         if (this.id) {
//             return {
//                 id: this.id
//             };
//         }
//         return false;
//     };


//     Employee.prototype.getRole = function() {
//         if (this.role) {
//             return {
//                 role: 'Employee'
//             };
//         }
//         return false;
//     };
// }

//ES6 constructor
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getEmail() {
        if (this.email) {
            return {
                email: this.email
            };
        }
        return false;
    }

    getName() {
        if (this.name) {
            return {
                name: this.name
            };
        }
        return false;
    };

    getId() {
        if (this.id) {
            return {
                id: this.id
            };
        }
        return false;
    };


    getRole() {
        if (this.role) {
            return {
                role: 'Employee'
            };
        }
        return false;
    };
}

module.exports = Employee;