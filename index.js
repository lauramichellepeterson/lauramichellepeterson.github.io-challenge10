const inquirer = require('inquirer');

// const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
// const Engineer = require('./lib/Engineer.js');
// const Intern = require('./lib/Intern.js');


// const employee = new Employee('Joe', '1', 'myemail.1@email.com');
// console.log(employee);

// const manager = new Manager('Sally', '2', 'myemail.2@email.com', 'manager', '777');
// console.log(manager);

// const engineer = new Engineer('Bob', '3', 'myemail.3@email.com', 'engineer', 'my_git_hub');
// console.log(engineer);

// const intern = new Intern('Betty', '4', 'myemail.4@email.com', 'intern', 'my_school');
// console.log(intern);

const promptManager = () => {
    console.log(`
    =================
      Add a Manager
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Manager name (Required): ',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please enter the Manager name: ');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee ID: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee Email: '
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Office Number: '
        }
    ]);
};

const promptMenu = () => {
    console.log(`
    =================
     Add Team Member
    =================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Add which employee role?',
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ])
};


const promptTeam = teamData => {
    // If there's no 'team' array property, create one
    if (!teamData.employees) {
        teamData.employees = [];
    }
    // console.log(teamData);

    console.log(`
    =================
     Add Team Member
    =================
    `);
    return inquirer.prompt(
        {
            type: 'list',
            name: 'role',
            message: 'Add which employee role?',
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ).then(addEmployee => {
        if (addEmployee.role == 'Engineer') {
            console.log(`
    =================
    Add an Engineer
    =================
            `);
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter Engineer name (Required): ',
                    validate: nameInput => {
                        if (nameInput) {
                        return true;
                        } else {
                        console.log('Please enter the name: ');
                        return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Employee ID: '
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Employee Email: '
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Github user name: '
                }
            ])
        }
        if (addEmployee.role == 'Intern') {
            console.log(`
    =================
    Add an Intern
    =================
            `);
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter Intern name (Required): ',
                    validate: nameInput => {
                        if (nameInput) {
                        return true;
                        } else {
                        console.log('Please enter the name: ');
                        return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Employee ID: '
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Employee Email: '
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'School name: '
                }
            ])
        }
    }).then(teamData => {
        if (newEmployee.role == 'Intern' || newEmployee.role == 'Engineer') {
            teamData.employees.push(teamData);
            console.log('Employee added');
            //then restart loop
        }
        else {
            console.log('Finish');
            // then exit loop
        }
    })
};



const createManager = (managerData) => {
    manager = new Manager(managerData.name, managerData.id, managerData.email, 'manager', managerData.officeNumber);
    console.log(manager);
    return manager;
}

// const createEngineer = (engineerData) => {
//     manager = new Manager(managerData.name, managerData.id, managerData.email, 'manager', managerData.officeNumber);
//      console.log(manager);
//     return manager;
// }

const addTeam = (menuChoice) => {
    console.log(menuChoice);

    while(menuChoice.role != 'Done') {
        if(menuChoice.role == 'Engineer') {
            console.log('Get engineer data');
            promptTeam(menuChoice);
            // return false;
        } else if (menuChoice.role == 'Intern') {
            console.log('Get intern data');
        } else {
            console.log('Done')
            return false;
        }
    }
    console.log('Done')
    return false;
}


promptManager()
    .then(promptTeam);
//    .then(managerData => {
//     // console.log(managerData);
//     createManager(managerData);
//     return managerData;
//    })
//    .then(menuChoice  => {
//     return promptMenu(menuChoice);
//    })
//    .then(menuChoice => {
//     // console.log(managerData);
//     // console.log(menuChoice);
//     return addTeam(menuChoice);    
//    })
//    .then(teamData => {
//     // console.log(menuChoice);
//     return promptTeam(teamData);
//    })
   ;
