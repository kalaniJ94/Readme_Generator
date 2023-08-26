// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is the title of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license to apply to your project.',
        choices: ['None', 'MIT', 'Boost Software License', 'Unlicense', 'Apache License 2.0']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please enter detailed instructions for those who may like to contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter detailed instructions for running tests on this application.',
    },
    {
        type: 'input',
        name: 'gitName',
        message: 'Please enter your github name.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
    },
];


// TODO: Create a function to write README file
function writeToFile(questions, data) {
    const filename = `${data.name.toLowerCase().split('').join('')}.json`;
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
 };

// TODO: Create a function to initialize app
function init() { 
inquirer
    .prompt(questions)
    .then(writeToFile) 
};
// Function call to initialize app
init();
