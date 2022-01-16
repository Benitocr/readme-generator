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
            return `Licensed under the [ISC license](https://choosealicense.com/licenses/isc/)`
            break;
        case "MIT License":
            return `Licensed under the [MIT license](https://choosealicense.com/licenses/mit/)`
            break;
        case "GNU General Public License v3.0":
            return `Licensed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`
            break;
        case "NONE":
            return ``
            break;
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    switch(license){
        case "ISC Licence":
            return `## License`
            break;
        case "MIT License":
            return `## License`
            break;
        case "GNU General Public License v3.0":
            return `## License`
            break;
        case "NONE":
            return ``
            break;
    }
}

function renderLicenseSectionreadme(license) {
    switch(license){
        case "ISC Licence":
            return `* [License](#license)`
            break;
        case "MIT License":
            return `* [License](#license)`
            break;
        case "GNU General Public License v3.0":
            return `* [License](#license)`
            break;
        case "NONE":
            return ``
            break;
    }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseSectionreadme(data.license)}
* [Questions](#questions)
* [Credits](#credits)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.test}
${renderLicenseSection(data.license)} 
${renderLicenseLink(data.license)}
## Questions
Repo in [Github](https://github.com/${data.githubUser})
or email me at ${data.email}
## Credits
${new Date().getFullYear()} by ${data.name}
`;
}

module.exports = generateMarkdown;
