// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
 
const questions = () =>{
  
    return inquirer.prompt([
            /* Pass your questions in here */
            {
                type: 'input',
                name:'name',
                message: 'What is your Name?',
                validate: nameInput => {
                    if(nameInput){
                        return true
                    } else{
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'githubUser',
                message: 'Please enter your github username for questions in regards your project',
                validate: nameInput => {
                    if(nameInput){
                        return true
                    } else{
                        console.log('Please enter your github username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email in order to reach you for questions of your project',
                validate: nameInput => {
                    if(nameInput){
                        return true
                    } else{
                        console.log('Please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name:'title',
                message: 'What is your project title?',
                validate: nameInput => {
                    if(nameInput){
                        return true
                    } else{
                        console.log('Please enter your project title!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter your project description',
                validate: nameInput => {
                    if(nameInput){
                        return true
                    } else{
                        console.log('Please enter your project description!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Provide some Instalation Instructions',
                validate: nameInput => {
                    if(nameInput){
                        return true
                    } else{
                        console.log('Please enter Instalation Instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide usage information',
                validate: nameInput => {
                    if(nameInput){
                        return true
                    } else{
                        console.log('Please enter usage information!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Please enter your contributing guidelenes',
                validate: nameInput => {
                    if(nameInput){
                        return true
                    } else{
                        console.log('Please enter your contributing guidelenes!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'test',
                message: 'Please enter your test instructions',
                validate: nameInput => {
                    if(nameInput){
                        return true
                    } else{
                        console.log('Please enter your test instructions!');
                        return false;
                    }
                }
            },
            
            
            {
                type: 'list',
                name: 'license',
                message: 'Please select the type of licence for your project ',
                choices: ['ISC Licence', 'MIT License', 'GNU General Public License v3.0', 'NONE'],
                default: '1'
            }
        ]);
    
}





// TODO: Create a function to write README file
function writeToFile(fileName, data ) {
    fs.writeFile(fileName, data, err=>{
        if(err) throw new Error(err);
        console.log('Readme file generated, Check out README.md in this directory to see it!');
    });

}

// TODO: Create a function to initialize app
function init() {
    // writeToFile ('README.md', '#name of Readme');
    questions()
     .then(answears => {
        //  console.log(answears.license);
         const file = generateReadme(answears);
         writeToFile('README.md', file);
        });
     
     


}





// Function call to initialize app
init()

    