// Assignment:
// Write a function named outerFunction that contains a variable username = "Mazid". Inside it, create another function innerFunction that prints the username. Call innerFunction from inside outerFunction.

function outerFunction() {

    let username = "Kazi";

    function innerFunction() {
        console.log(username);
    }

    innerFunction();
}

outerFunction();