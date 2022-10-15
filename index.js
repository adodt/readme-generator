const fs = require('fs')
const inquirer = require('inquirer')
const generatePage = require('./utils/generateMarkdown.js')

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
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

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) { }

    // TODO: Create a function to initialize app
    function init() { }

    // Function call to initialize app
    init();
}
