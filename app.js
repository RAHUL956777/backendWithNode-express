const amount = 12;
if (amount < 10) {
  // console.log("small number");
} else {
  // console.log("large number");
}

// modules
/* 
in common js, every file is a module(by default)
Modules - Encapulate code (only share minimum)
*/

const names = require("./names");
const wish = require("./utils");
const data = require("./alternativeExport");

// console.log(data);

// wish(names.rahul);
// wish(names.sushanta);
