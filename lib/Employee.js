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