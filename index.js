//require
const fs = require('fs')
const inquirer = require('inquirer')
const generatePage = require('./utils/generateMarkdown.js')

//questions for input from user
const questions = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter the title of your project.');
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a description of your project.');
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps for installation?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Include steps for project installation.');
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the uses for this project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a usage description..');
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license does your project have?',
            choices: ['MIT', 'GNU'],
            default: ['MIT'],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Plesaes indicate the license used for this project.');
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Write directions for user contribution.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Include directions for user contribution.');
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command is used to run tests?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Include command used to run test. npm is standard.');
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter GitHub username.');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter email address.');
                }
            }
        }
    ]);
}

//create README with a successful prompt or error after creating 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Nice work. Your README has been generated!");
        }
    });
};

//generate page with user answers
questions()
    .then(answers => {
        return generatePage(answers);
    })

    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err)
    })