// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

//title of project
//description
//table of contents
//installation
//usage
//license
//contributing
//tests
//questions (guthub username and link to profile. email with instructions on how to reach me)
//table on contents directs to corresponding section of README


function generateMarkdown(data) {
  return `# ${data.title}
![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)

##Description
${data.description}

##Table of Contents
-[Installation](#installation)  
-[Usage](#usage)  
-[License](#license)  
-[Contributing](#contributing)  
-[Tests](#tests)  
-[Questions](#questions)  

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
To view my projects, please visit https://github.com/${data.github}.
For questions regarding this project, contact me directly at ${data.email}.

`;
}

module.exports = generateMarkdown;