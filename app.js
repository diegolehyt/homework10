const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Program
// test starts
const mana = new Manager("Diego", 31, "diegolehy00@gmail.com", 10)
const inte = new Intern("Nacho", 28, "ncl@hotmail.com", "Saint D")
console.log(mana)
console.log(inte)

const arr = [mana, inte]
console.log(render(arr))


// test ends

// inquirer
// .prompt([{
//   message: 'Enter your GitHub username:',
//   name: 'username'
// },
// {
//   message: 'Enter Github repository name:',
//   name: 'repo'
// },
// {
//   message: 'Would you like to include the MIT license, inside this project? (type "yes" to accept)',
//   name: 'ans',
//   default: 'no'
// }
// ])
// .then(function ({ username, repo, ans }) {
//   const queryUrl = `https://api.github.com/users/${username}`

//   axios.get(queryUrl).then(function (res) {
//     const profileImg = res.data.avatar_url
//     const fullname = res.data.name


//     appendFileP('newReadme.md', generateBadges(username, repo, profileImg), function (err) {
//       if (err) {
//         throw err
//       }

//     })

//     if (ans === "yes" ){
//       writeFileP('LICENSE.txt', generateLICENSE(fullname),function (err) {
//         if (err) {
//           throw err
//         }
        
//       })
//       console.log('\x1b[92mSucced!, LICENSE.txt file was created\x1b[39m')
//     }
//     else{
//       console.log('\x1b[91mRejeted!, LICENSE.txt file was not created\x1b[39m')
//     }

//     console.log(`\x1b[92mSucced!, newReadme.md file was created\x1b[39m`)
//   })







// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
