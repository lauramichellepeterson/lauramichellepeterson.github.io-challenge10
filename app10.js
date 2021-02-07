const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');
const mockData = require('./src/mock-data_10.js');

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
        // {
        //     type: 'input',
        //     name: 'github',
        //     message: 'Enter your GitHub Username (Required)',
        //     validate: input => {
        //         if (input) {
        //         return true;
        //         } else {
        //         console.log('Please enter your Username!');
        //         return false;
        //         }
        //     }
        // },
        {
            type: 'input',
            name: 'emp_id',
            message: 'Employee ID: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee Email: '
        },
        {
            type: 'input',
            name: 'office_num',
            message: 'Office Number: '
        }
    ]);
};

const promptContinue = continueReply => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'add_member',
            message: 'Would you like to add a team member?',
            choices: ['Engineer', 'Intern', 'Finish'],
            default: 0
        })
};

const promptTeam = teamData => {
    // If there's no 'team' array property, create one
    if (!teamData.members) {
        teamData.members = [];
    }
    
    console.log(`
    =================
    Add a Team Member
    =================
    `);
    return inquirer.prompt([
        // {
        //     type: 'list',
        //     name: 'add_member',
        //     message: 'Would you like to add a team member?',
        //     choices: ['Engineer', 'Intern', 'Finish'],
        //     default: 0
        // },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project? (Required)',
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('Please enter the project name!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('Please enter the project description!');
                return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('Please enter the Github link!');
                return false;
                }
            }
        },
        // {
        //     type: 'confirm',
        //     name: 'feature',
        //     message: 'Would you like to feature this project?',
        //     default: false
        // },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to enter another team member?',
            default: false
        }
    ]).then(teamData => {
        teamData.members.push(teamData);
        if (teamData.confirmAddMember) {
          return promptTeam(teamData);
        } else {
          return teamData;
        }
    });
};

promptManager()
    .then(promptContinue)
    .then(continueReply => {
        console.log(continueReply);
    });
// if(continueReply == 0 || continueReply == 1) {
//     console.log(continueReply);
// };
    // .then(promptTeam)
    // .then(portfolioData => {
    // // return generatePage(portfolioData);
    // return generatePage(mockData);
    // })
    // .then(pageHTML => {
    // return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    // console.log(writeFileResponse);
    // return copyFile();
    // })
    // .then(copyFileResponse => {
    // console.log(copyFileResponse);
    // })
    // .catch(err => {
    // console.log(err);
    // });
