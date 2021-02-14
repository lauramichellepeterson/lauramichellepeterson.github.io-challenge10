const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const createManager = (managerData) => {
    manager = new Manager(managerData.name, managerData.id, managerData.email, 'Manager', managerData.officeNumber);
    return manager;
}

const createEngineer = (engineerData) => {
    engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, 'Engineer', engineerData.github);
    return engineer;
}

const createIntern = (internData) => {
    intern = new Intern(internData.name, internData.id, internData.email, 'Intern', internData.school);
    return intern;
}

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
    ])
    .then(addManager => {
        return createManager(addManager);
    });
};

const promptTeam = teamData => {
    // If there's no 'employees' array property, create one
    if (!teamData.employees) {
        teamData.employees = [];
    }

    console.log(`
    =================
     Add Team Member
    =================
    `);
    return inquirer.prompt(
        {
            type: 'list',
            name: 'addNew',
            message: 'Add which employee type?',
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ).then(addEmployee => {
        if (addEmployee.addNew == 'Engineer') {
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
            .then(addEngineer => {
                return createEngineer(addEngineer);
            })
            .then(employeeData => {
                teamData.employees.push(employeeData);
                return teamData;
            })
            .then(teamData => {
                return inquirer.prompt(
                    {
                        type: 'confirm',
                        name: 'confirmAddEmployee',
                        message: 'Would you like to enter another employee?',
                        default: false
                    }
                ).then(addEmployee => {
                    if (addEmployee.confirmAddEmployee) {
                        return promptTeam(teamData);
                    } else {
                        addEmployee.addNew == 'Finish';
                        return teamData;
                    }
                }).then(teamData => {
                    return teamData
                })  
            }).then(teamData => {
                return teamData
            });
        }
        else if (addEmployee.addNew == 'Intern') {
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
            .then(addIntern => {
                return createIntern(addIntern);
            })
            .then(employeeData => {
                teamData.employees.push(employeeData);
                return teamData;
            })
            .then(teamData => {
                return inquirer.prompt(
                    {
                        type: 'confirm',
                        name: 'confirmAddEmployee',
                        message: 'Would you like to enter another employee?',
                        default: false
                    }
                ).then(addEmployee => {
                    if (addEmployee.confirmAddEmployee) {
                        return promptTeam(teamData);
                    } else {
                        addEmployee.addNew == 'Finish';
                        return teamData;
                    }
                }).then(teamData => {
                    return teamData
                })  
            }).then(teamData => {
                return teamData
            });
        }
        else if (addEmployee.addNew == 'Finish') {
            console.log('Done adding employees.');
            return teamData;
        }
    }).then(teamData => {
            return teamData;
    })
};

promptManager()
    .then(promptTeam)
    .then(teamData => {
        console.log(teamData);
   })
   ;
