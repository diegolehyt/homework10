//---------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------\ Team Generator - Homework 10 /----------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------\ Const for project /----------------------------------------------------------
// CLasses
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// In
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require('util')

// Path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Promisify
const writeFileP = util.promisify(fs.writeFile)

// Render html
const render = require("./lib/htmlRenderer");

// --------------------------------------------------------------\ Program /-----------------------------------------------------------------

let teamMembers = [];

generateApp()


// Functions

function generateApp() {    

    inquirer
        .prompt([{
            message: 'Enter the Name',
            name: 'name'
            },
            {
            type: 'list',
            message: 'Select the Role',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'role'
            },
            {
            message: 'Enter the ID',
            name: 'id'
            },
            {
            message: 'Enter the email',
            name: 'email'
            }
        ])
        .then(function ({ name, role, id, email }) {
            if (role === "Manager") {
                inquirer
                    .prompt([{
                        message: 'Enter office number',
                        name: 'officeNumber'
                        },
                        {
                        type: 'list',
                        message: 'Would you like to add an other member to your team?',
                        choices: ['Yes', 'No'],
                        name: 'newMember'
                        }
                    ])
                    .then(function({ officeNumber, newMember }){
                        teamMembers.push(new Manager(name, id, email, officeNumber))
                        
                        
                        if (newMember === 'Yes') {
                            generateApp()
                        }
                        else {
                            writeFileP(outputPath, render(teamMembers),function (err) {
                                if (err) {
                                  throw err
                                }
                                
                                
                            })
                            console.log('Succed!')
                        }
                        
                    })
            }
            else if (role === "Engineer"){
                inquirer
                    .prompt([{
                        message: 'Enter Github username',
                        name: 'github'
                        },
                        {
                        type: 'list',
                        message: 'Would you like to add an other member to your team?',
                        choices: ['Yes', 'No'],
                        name: 'newMember'
                        }
                    ])
                    .then(function({ github, newMember }){
                        teamMembers.push(new Engineer(name, id, email, github))
                        
                        if (newMember === 'Yes') {
                            generateApp()
                        }
                        else {
                            writeFileP(outputPath, render(teamMembers),function (err) {
                                if (err) {
                                  throw err
                                }
                                
                                
                            })
                            console.log('Succed!')
                        }
                       
                    })
            }
            else if (role === "Intern"){
                inquirer
                .prompt([{
                    message: 'Enter The name of your school',
                    name: 'school'
                    },
                    {
                    type: 'list',
                    message: 'Would you like to add an other member to your team?',
                    choices: ['Yes', 'No'],
                    name: 'newMember'
                    }
                ])
                .then(function({ school, newMember }){
                    teamMembers.push(new Intern(name, id, email, school))
                  
                    if (newMember === 'Yes') {
                        generateApp()
                    }
                    else {
                        writeFileP(outputPath, render(teamMembers),function (err) {
                            if (err) {
                              throw err
                            }
                            
                            
                        })
                        console.log('Succed!')
                    }
                })
            }
            else {
                console.log('Wrong role, try again!')
            }

          
        })
        .catch(function (err) {
            console.error(err)
        })
        

}

// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------\  END  /---------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
