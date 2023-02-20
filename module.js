// *************************os module************************
const os = require("os");

// info about current users
const user = os.userInfo();
// console.log(user);

// method to run system uptime in second
// console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  releaser: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

// console.log(currentOs);

// **************** path module*****************
const path = require("path");
console.log(path.sep);

const filePath = path.join("folder or files pathe will be written here");

const base = path.basename(filePath);


