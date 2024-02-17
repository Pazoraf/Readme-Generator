const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'titleQ',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'descriptionQ',
        message: 'Please enter a description'
    },
    {
        type: 'input',
        name: 'tocQ',
        message: 'Please enter your table of contents'
    },
    {
        type: 'input',
        name: 'installationQ',
        message: 'Please enter some installation instructions'
    },
    {
        type: 'input',
        name: 'usageQ',
        message: 'Please enter some usage instructions'
    },
    {
        type: 'input',
        name: 'licenseQ',
        message: 'Please enter some license information'
    },
    {
        type: 'input',
        name: 'contributingQ',
        message: 'Please enter any contributers'
    },
    {
        type: 'input',
        name: 'testsQ',
        message: 'Please enter some test information'
    },
    {
        type: 'input',
        name: 'questionQ',
        message: 'Please enter some question information'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'))
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers)
        const { titleQ, descriptionQ, tocQ, installationQ, usageQ, licenseQ, contributingQ, testsQ, questionQ } = answers
        const potentialFile = `# ${titleQ}\n\n## Description:\n\n${descriptionQ}\n\n## Table of Contents:\n\n${tocQ}\n\n## Installation Instructions:\n\n${installationQ}\n\n## Usage Instructions:\n\n${usageQ}\n## License:\n\n${licenseQ}\n\n## Contributing:\n\n${contributingQ}\n\n## Tests:\n\n${testsQ}\n\n## Questions:\n\n${questionQ}`
        console.log(potentialFile)
        writeToFile("READMEEXAMPLE.md", potentialFile)
    })

};



// function call to initialize program
init();
