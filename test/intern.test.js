const Intern = require("../lib/Intern");

describe ('Intern', () => {
    it('Should create new object', () => {
        const name = "intern";
        const id = "3";
        const email = "intern@gmail.com";
        const school = "UNH";
        const internObj = new Intern(name, id, email, school)

        expect(internObj.getName()).toBe(name)

        expect(internObj.getId()).toBe(id)

        expect(internObj.getEmail()).toBe(email)

        expect(internObj.getSchool()).toBe(school)
    })
})
