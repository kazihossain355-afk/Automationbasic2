const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", (answer) => {
    const age = Number(answer);

    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are not an adult.");
    }

    rl.close();
});
