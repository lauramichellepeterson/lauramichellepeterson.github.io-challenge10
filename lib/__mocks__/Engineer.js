module.exports = function() {
    this.name = 'Joe Blow';
    this.id = 1007;
    this.email = 'email@email.com';
    this.role = 'engineer';
    this.github = 'myGithub'

    this.getRole = function() {
        return {
            role: this.role
        };
    };
};