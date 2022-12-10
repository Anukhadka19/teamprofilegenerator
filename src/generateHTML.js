const Engineer = require("../lib/Engineer")

// Function creates cards for employee classes
const generateTeam = team => {
    const generateManager = manager => {
        return `<div class="card employee-card">
            <h2 class="card-name">
                ${manager.getName()}
            </h2>
            <div class="card-title"> Manager </div>
            <div class="card-body">
                <p class="id">ID: ${manager.getId()}</p>
                <p class="email">Email: <a href="mailto: ${manager.getEmail()}"> ${manager.getEmail()} </a></p>
                <p class="office number">Office: ${manager.getOffice()}</p>
                </p>
            </div>
        </div>`
}

const generateEngineer = engineer => {
    return `<div class="card employee-card">
        <h2 class="card-name">
            ${engineer.getName()}
        </h2>
        <div class="card-title"> Engineer </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.getId()}</p>
            <p class="email">Email: <a href="mailto: ${engineer.getEmail()}"> ${engineer.getEmail()} </a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>

        </div>
    </div>`
}

const generateIntern = intern => {
    return `<div class="card employee-card">
        <h2 class="card-name">
            ${intern.getName()}
        </h2>
        <div class="card-title"> Intern </div>
        <div class="card-body">
            <p class="id">ID: ${intern.getId()}</p>
            <p class="email">Email: <a href="mailto: ${intern.getEmail()}"> ${intern.getEmail()} </a></p>
            <p class="education"> School: ${intern.getSchool()} </div>
        
        </div>
    </div>`
}

// if else function to generate specific employee class
const htmlBlocks = []
    team.forEach(teamMember => {
        if (teamMember.getRole() === 'Manager') {
            htmlBlocks.push(generateManager(teamMember));
        } else if (teamMember.getRole() === 'Engineer') {
            htmlBlocks.push(generateEngineer(teamMember));
        } else {
            htmlBlocks.push(generateIntern(teamMember));
        }
    });
    return htmlBlocks.join('')
}

// Function to generate html file
module.exports = team => (
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css" />
    </head>
    
    <body>
        <header class="container">
            <section class="row">
                <div class="col-12 col-md-9">
                    <h1>Welcome to my team.</h1>
                </div>
            </section>
        </header> 
    
        <main class="container">
            <div class="row">
            ${generateTeam(team)}
            </div>
        </main>
    </body>
    </html>`
)




