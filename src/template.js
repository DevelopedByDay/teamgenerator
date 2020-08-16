const createWorkGroup = team => {

    const createWorkManager = teamManager => {
        return `
        <div class="card teamCard">
        <div class="card-header">
            <h3 class="card-title">${teamManager.name}</h3>
            <h4 class="card-title">${teamManager.getRole()}</h4>
        </div>
        <div class="cardMain">
            <ul class="list-group">
                <li class="listItem">ID: ${teamManager.id}</li>
                <li class="listItem">Email: <a href="mailto:${teamManager.email}}">${teamManager.email}</a></li>
                <li class="listItem">Office number: ${teamManager.officeNumber}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const createWorkEngineer = teamEngineer => {
        return `
        <div class="card teamCard">
    <div class="card-header">
        <h3 class="card-title">${teamEngineer.name}</h3>
        <h4 class="card-title">${teamEngineer.getRole()}</h4>
    </div>
    <div class="cardMain">
        <ul class="list-group">
            <li class="listItem">ID: ${teamEngineer.id}</li>
            <li class="listItem">Email: <a href="mailto:${teamEngineer.email}">${teamEngineer.email}</a></li>
            <li class="listItem">GitHub: <a href="https://github.com/${teamEngineer.github}" target="_blank">${teamEngineer.github}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    const createWorkIntern = teamIntern => {
        return `
        <div class="card teamCard">
    <div class="card-header">
        <h3 class="card-title">${teamIntern.name}</h3>
        <h4 class="card-title">${teamIntern.getRole()}</h4>
    </div>
    <div class="cardMain">
        <ul class="list-group">
            <li class="listItem">ID: ${teamIntern.id}</li>
            <li class="listItem">Email: <a href="mailto:${teamIntern.email}">${teamIntern.email}</a></li>
            <li class="listItem">School: ${teamIntern.school}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(teamManager => createWorkManager(teamManager)));
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(teamEngineer => createWorkEngineer(teamEngineer)).join(""));
    html.push(team.filter(employee => employee.getRole() === "Intern").map(teamIntern => createWorkIntern(teamIntern)).join(""));

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