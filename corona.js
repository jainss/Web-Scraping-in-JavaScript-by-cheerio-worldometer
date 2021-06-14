const request = require('request');
const cheerio = require("cheerio");
const chalk = require("chalk");
request('https://www.worldometers.info/coronavirus/', cb);
console.log("after");
function cb(error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    } else {
        handlehtml(html);
    }
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
};
function handlehtml(html) {
    let selecttool = cheerio.load(html);
    // let h1s = selecttool("maincounter-number");
    // console.log(h1s.length);
    let arr = selecttool("#maincounter-wrap span");
    // for (let i = 0; i < arr.length; i++) {
    //     let data = selecttool(arr[i]).text();
    //     console.log("Data :    " + data);
    // }
    let cases = selecttool(arr[0]).text();
    console.log(chalk.gray("Total Cases" + cases));
    let death = selecttool(arr[1]).text();
    console.log(chalk.red("Total Death" + death));
    let recov = selecttool(arr[2]).text();
    console.log(chalk.green("Total Recover" + recov));
}