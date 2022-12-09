const Employee = require("../lib/Employee");

describe ('Employee', () => {
    it('Should create employee object', () => {
        const name = "test";
        const id = "1";
        const email = "abc@gmail.com";
        const employeeObj = new Employee(name, id, email)

        expect(employeeObj.getName()).toBe(name)

        expect(employeeObj.getId()).toBe(id)

        expect(employeeObj.getEmail()).toBe(email)
    })
})
