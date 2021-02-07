module.exports = function() {
    this.name = 'Joe Blow';
    this.id = 1007;
    this.email = 'email@email.com';
    this.role = 'intern';
    this.school = 'mySchool'

    this.getRole = function() {
        return {
            role: this.role
        };
    };
};