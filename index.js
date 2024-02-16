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
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers)
        const potentialFile = `${answers}`
    })

};



// function call to initialize program
init();
