const Manager = require("../lib/Manager");

// create the Manager section
const generateManager = manager => {
  if (!manager) {
    return '';
  }

  return `
    <section class="my-3" id="manager">
      <h2 class="container-fluid text-dark bg-primary p-2 display-inline-block">Manager</h2>
      <h3>${manager.name}</h3>
      <h5>ID: ${manager.id}</h5>
      <h5><a href="mailto:${manager.email}">${manager.email}</a></h5>
      <h5>Office Number: ${manager.officeNumber}</h5>
    </section>
  `;
};

// create the Employee section
const generateTeam = team => {
  if (!team) {
    return '';
  }

  return `
    <section class="container-fluid my-3" id="employees">
      <h2 class="container-fluid text-dark bg-primary p-2 display-inline-block">Employees</h2>
      <div class="flex-row justify-space-between">
        <div class ="flex-row justify-space-around">
          ${team
            .filter(employee => {
              if (employee.role == 'Engineer') {
                return true;
              } else {
                return false;
              }
            })
            .map(({ role, name, id, email, github }) => {
              return `
              <div class="p-4">
                <h3>${role}</h3>
                <h4>${name}</h4>
                <h5>ID: ${id}</h5>
                <h5><a href="mailto:${email}">${email}</a></h5>
                <a href="${github}" class="btn"><i class="fab fa-github mr-2"></i>View GitHub</a>
              </div>
                `;
              })
              .join('')}

          ${team
            .filter(employee => {
              if (employee.role == 'Intern') {
                return true;
              } else {
                return false;
              }
            })
            .map(({ role, name, id, email, school }) => {
              return `
              <div class="p-4">
                <h3>${role}</h3>
                <h4>${name}</h4>
                <h5>ID: ${id}</h5>
                <h5><a href="mailto:${email}">${email}</a></h5>
                <h5>School: ${school}</h5>
              </div>
              `;
              })
              .join('')}
          </div>
      </div>
    </section>
  `;
};


module.exports = templateData => {
    // destructure page data by section
    const manager = templateData;
    const employeeArr = templateData.employees;

    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
      </header>
      <main class="container my-5">
      ${generateManager(manager)}
      ${generateTeam(employeeArr)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
      </footer>
    </body>
    </html>
    `;
};
