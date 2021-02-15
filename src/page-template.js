const Manager = require("../lib/Manager");

// create the Manager section
const generateManager = manager => {
  if (!manager) {
    return '';
  }

  return `
    <section class="my-3" id="manager">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Manager</h2>
      <h3>${manager.name}</h3>
      <h5>ID: ${manager.id}</h5>
      <h5><a href="mailto:${manager.email}">${manager.email}</a></h5>
      <h5>Office Number: ${manager.officeNumber}</h5>
    </section>
  `;
};

// create the Team section
const generateTeam = team => {
  if (!team) {
    return '';
  }

  return `
    <section class="my-3" id="employees">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Employees</h2>
      <div class="flex-row justify-space-between">
        <div flex-column>
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
              <h3>${name}</h3>
              <h5>ID: ${id}</h5>
              <h5>${role}</h5>
              <h5><a href="mailto:${email}">${email}</a></h5>
              <a href="\n${github}" class="btn"><i class="fab fa-github mr-2"></i>View GitHub</a>
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
                  <h3>${name}</h3>
                  <h5>ID: ${id}</h5>
                  <h5>${role}</h5>
                  <h5><a href="mailto:${email}">${email}</a></h5>
                  <h5>School: ${school}</h5>
                  `;
                  })
                  .join('')}
          </div>
      </div>
    </section>
  `;
};

const generateProjects = projectsArr => {
    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
        ${projectsArr
          .filter(({ feature }) => feature)
          .map(({ name, description, languages, link }) => {
            return `
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <h5 class="portfolio-languages">
                Built With:
                ${languages.join(', ')}
              </h5>
              <p>${description}</p>
              <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
          })
          .join('')}
  
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, description, languages, link }) => {
            return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <h5 class="portfolio-languages">
                Built With:
                ${languages.join(', ')}
              </h5>
              <p>${description}</p>
              <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
          })
          .join('')}
        </div>
      </section>
    `;
  };


module.exports = templateData => {
// const generatePage = templateData => {
    // destructure page data by section
    console.log(templateData);
    const manager = templateData;
    const employeeArr = templateData.employees;
    // const engineers = employeeArr.filter(employee => {
    //   if (employee.role == 'Engineer') {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

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

        // by ${header.name}

// module.exports = generatePage;