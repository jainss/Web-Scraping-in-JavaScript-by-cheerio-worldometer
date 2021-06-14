const fs = require('fs');

// let data = fs.readFileSync("f1.txt");
// console.log("" + data);
// console.log("After");
fs.readFile("f1.txt", cd);
function cd(err, data) {
    console.log("data " + data);
}
console.log("Before");