const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office
    }

// Array function associated with specific role
getRole() {
    return 'Manager';
}
getOffice() {
    return this.office;
}
}

module.exports = Manager