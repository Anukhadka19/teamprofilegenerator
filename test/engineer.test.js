const Engineer = require("../lib/Engineer");

describe ('Engineer', () => {
    it('Should create new object', () => {
        const name = "engineer";
        const id = "2";
        const email = "eng@gmail.com";
        const github = "engineer2";
        const engineerObj = new Engineer(name, id, email, github)

        expect(engineerObj.getName()).toBe(name)

        expect(engineerObj.getId()).toBe(id)

        expect(engineerObj.getEmail()).toBe(email)

        expect(engineerObj.getGithub()).toBe(github)
    })
})
