let cp = require("child_process");
//console.log("Trying to open my calculator");
// cp.execSync("calc"); // It will open the calculator
// cp.execSync("start chrome https:\\www.github.com"); // open any website
// console.log("Opened calculator");
let output = cp.execSync("node abc.js");
console.log("Aami jetu maa "+output);