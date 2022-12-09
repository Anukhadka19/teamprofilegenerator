const Manager = require("../lib/Manager");

describe ('Manager', () => {
    it('Should create new object', () => {
        const name = "manager";
        const id = "4";
        const email = "manager@gmail.com";
        const office = "004";
        const managerObj = new Manager(name, id, email, office)

        expect(managerObj.getName()).toBe(name)

        expect(managerObj.getId()).toBe(id)

        expect(managerObj.getEmail()).toBe(email)

    })
})
