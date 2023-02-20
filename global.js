// in node js there are no window object..there are global varibale
/* example:-
        __dirname --- path to current directry
        __filename --- file name
        required --- function to use modules
        module --- info about current module (file)
        process --- info about env where the program is being excuted
*/

console.log(__dirname);

// setInterva;
setInterval(() => {
  console.log("Welcome");
}, 2000);
