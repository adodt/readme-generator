
//generate README

function generateMarkdown(data) {
  return `# ${data.title}
![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)

## Description
${data.description}

## Table of Contents<br />
-[Installation](#installation)<br />
-[Usage](#usage)<br />
-[License](#license)<br />
-[Contributing](#contributing)<br />
-[Tests](#tests)<br />
-[Questions](#questions)<br />

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

//adds gererateMarkdown to index.js
module.exports = generateMarkdown;