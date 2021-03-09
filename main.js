// Project Generator
// Koda ihop ett skript som skapar en mapp-struktur, inititerar ett git-repo och ett npm-projekt.

// Mappstrukturen ska ha mapparna dist, views och styles

const {exec} = require("child_process");
const fs = require("fs")
const path = require("path")

const cwd = process.cwd()
const projectName = process.argv[2]

fs.mkdirSync(projectName)
process.chdir(projectName)

fs.mkdirSync("dist")
fs.mkdirSync("views")
fs.mkdirSync("styles")
process.chdir("styles")
fs.openSync("styles.css", "w")
process.chdir("..")

// exec(`cd ${projectName}`, (error, stdout, stderr) => {
//  
  exec("git init && npm init -y", (error, stdout, stderr) => {
    console.log(stdout);
  })
// })

console.log(cwd);


