const fs = require('fs');
const readline = require("readline");
var i = 0;

const write = (input) => {
    fs.writeFile("test.txt", `${input}`, err => {
        if (err) {
            console.log("Error.")
        }
        i++;
        return i;
    });

}

const append = (input) => {
    fs.appendFile("test.txt", `${input}`, err => {
        if (err) {
            console.log("Error");
        }
        return
    });
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var recursiveAsyncReadLine = () => {

    rl.question('Input : ', function (input) {

        if (input == 'exit') //we need some base case, for recursion
            return rl.close(); //closing RL and returning from function.
        if (i != 0) {
            append('\n' + input);
        }
        else

            write(input);

        recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};

recursiveAsyncReadLine();





