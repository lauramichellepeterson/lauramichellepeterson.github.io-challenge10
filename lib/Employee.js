function Employee(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    
    // getName()
    // getId()
    // getEmail()
    // getRole()


    // this.getRole = function() {
    //     return {
    //         role: this.role
    //     };
    // };

    // this.getData = function() {
    //     return {
    //       name: this.name,
    //       id: this.id,
    //       email: this.email,
    //       role: this.role
    //     };
    // };

    Employee.prototype.getData = function() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            role: this.role
        };
    };
      
    Employee.prototype.getRole = function() {
        if (this.role) {
            return {
                role: this.role
            };
        }
        return false;
    };
}

module.exports = Employee;