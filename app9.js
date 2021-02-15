const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template9.js');
const mockData = require('./src/mock-data.js');

const promptUser = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter your name!');
            return false;
            }
        }
        },
        {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: input => {
            if (input) {
            return true;
            } else {
            console.log('Please enter your Username!');
            return false;
            }
        }
        },
        {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
        }
    ]);
};

const promptProject = portfolioData => {
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    
    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
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
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
    });
};

// const pageHTML = generatePage(mockData);
// fs.writeFile('./dist/index.html', pageHTML, err => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('Page created! Check out index.html in this directory to see it!');
  
//     fs.copyFile('./src/style.css', './dist/style.css', err => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log('Style sheet copied successfully!');
//     });
//   });


promptUser()
    .then(promptProject)
    .then(portfolioData => {
    // return generatePage(portfolioData);
    return generatePage(mockData);
    })
    .then(pageHTML => {
    return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
    })
    .then(copyFileResponse => {
    console.log(copyFileResponse);
    })
    .catch(err => {
    console.log(err);
    });
