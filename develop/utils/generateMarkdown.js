// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license){
        case "ISC Licence":
            return '![license](https://img.shields.io/badge/Licence-ISC-blue)'
            break;
        case "MIT License":
            return '![license](https://img.shields.io/badge/Licence-MIT-blue)'
            break;
        case "GNU General Public License v3.0":
            return '![license](https://img.shields.io/badge/Licence-GNU-blue)'
            break;
        case "NONE":
            return ''
            break;
    }
   
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license){
        case "ISC Licence":
            return '[ISC license](https://choosealicense.com/licenses/isc/)'
            break;
        case "MIT License":
            return '[MIT license](https://choosealicense.com/licenses/mit/)'
            break;
        case "GNU General Public License v3.0":
            return '[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)'
            break;
        case "NONE":
            return ''
            break;
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    switch(license){
        case "ISC Licence":
            return `## License
            Licensed under the `
            break;
        case "MIT License":
            return `## License
            Licensed under the `
            break;
        case "GNU General Public License v3.0":
            return `## License
            Licensed under the `
            break;
        case "NONE":
            return ``
            break;

    };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `
  # ${data.title}
  ${renderLicenseBadge(data.licence)}
  ## Description
  ${data.description}
  ## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.test}${renderLicenseSection(data.licence)}${renderLicenseLink(data.licence)}
  ## Credits
  ${new Date().getFullYear()} by ${data.name}

`;
}

module.exports = generateMarkdown;
