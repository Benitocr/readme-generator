// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'NONE'){
        return '';
    }
    return '[![license](https://img.shields.io/badge/Licence-MIT-blue)]';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  ${data.test}
  ## Credits
  ${new Date().getFullYear()} by ${data.name}


`;
}

module.exports = generateMarkdown;
