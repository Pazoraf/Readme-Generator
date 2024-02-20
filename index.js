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
        name: 'installationQ',
        message: 'Please enter some installation instructions'
    },
    {
        type: 'input',
        name: 'usageQ',
        message: 'Please enter some usage instructions'
    },
    {
        type: 'checkbox',
        name: 'licenseQ',
        message: 'Please choose your license',
        choices: ['MIT', 'The Unlicense', 'ISC']
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
        name: 'githubQ',
        message: 'Please enter your github username'
    },
    {
        type: 'input',
        name: 'emailQ',
        message: 'Please enter your email address'
    },
    {
        type: 'input',
        name: 'fullNameQ',
        message: 'Please enter your full name'
    }
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
        const { titleQ, descriptionQ, installationQ, usageQ, licenseQ, contributingQ, testsQ, githubQ, emailQ, fullNameQ } = answers
        let licenseBadge;
        let licenseContent;
        switch (licenseQ[0]) {
            case "MIT":
                licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                licenseContent = `
MIT License

Copyright (c) 2024 ${fullNameQ}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
                break;
            case "The Unlicense":
                licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
                licenseContent = `
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
                
For more information, please refer to <https://unlicense.org>`
                break;
            case "ISC":
                licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
                licenseContent = `
ISC License

Copyright 2024 ${fullNameQ}

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
                break;


        }
        const potentialFile = `${licenseBadge}

# ${titleQ}

## Description: 

${descriptionQ}

## Table of Contents:

- [Description](#description)

- [Installation](#installation-instructions)

- [Usage](#usage-instructions)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation Instructions:

${installationQ}

## Usage Instructions:

${usageQ}

## License:

${licenseContent}

## Contributing:

${contributingQ}

## Tests:

${testsQ}

## Questions:

Please forward any questions to Github or to email.

- [Github](https://github.com/${githubQ})

- [Email](mailto:${emailQ})

`  
        writeToFile("READMEEXAMPLE.md", potentialFile)
    })

};



// function call to initialize program
init();
