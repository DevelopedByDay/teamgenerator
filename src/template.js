const createWorkGroup = team => {

    const createWorkManager = manager => {
        return `
        <div class="card teamCard">
        <div class="card-header">
            <h3 class="card-title">${manager.getName()}</h3>
            <h4 class="card-title">${manager.getRole()}</h4>
        </div>
        <div class="cardMain">
            <ul class="list-group">
                <li class="listItem">ID: ${manager.getId()}</li>
                <li class="listItem">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
                <li class="listItem">Office number: ${manager.getOfficeNumber()}}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const createWorkEngineer = engineer => {
        return `
        <div class="card teamCard">
    <div class="card-header">
        <h3 class="card-title">${engineer.getName()}</h3>
        <h4 class="card-title">${engineer.getRole()}</h4>
    </div>
    <div class="cardMain">
        <ul class="list-group">
            <li class="listItem">ID: ${engineer.getId()}</li>
            <li class="listItem">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="listItem">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    const createWorkIntern = intern => {
        return `
        <div class="card teamCard">
    <div class="card-header">
        <h3 class="card-title">${intern.getName()}</h3>
        <h4 class="card-title">${intern.getRole()}</h4>
    </div>
    <div class="cardMain">
        <ul class="list-group">
            <li class="listItem">ID: {{ id }}</li>
            <li class="listItem">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="listItem">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => createWorkManager(manager)));
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => createWorkEngineer(engineer)).join(""));
    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => createWorkIntern(intern)).join(""));

    return html.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="stylesheet.css">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-12 jumbotron header">
                <h1 class="text-center">Our Workplace</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="workGroup col-12 d-flex justify-content-center">
                ${createWorkGroup(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
}