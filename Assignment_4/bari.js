// 1. Create and call a function

function sayHello() {

    console.log("Hello, JavaScript!");

}

sayHello();

// 2. Function with parameters and return value

function multiplyNumbers(num1, num2) {

    return num1 * num2;

}

let result = multiplyNumbers(5, 6);

console.log("Multiplication Result:", result);

// 3. Default parameter practice

function greetUser(username = "username") {

    console.log("Welcome, " + username);

}

greetUser("John");

greetUser();

// 4. Rest operator practice

function sumAllNumbers(...numbers) {

    return numbers;

}

let numberArray = sumAllNumbers(10, 20, 30, 40, 50);

console.log("Array:", numberArray);

// 5. Function declaration vs function expression

// Function Declaration

function addOne(number) {

    return number + 1;

}

// Function Expression

const addTwo = function(number) {

    return number + 2;

};

console.log("addOne Result:", addOne(5));

console.log("addTwo Result:", addTwo(5));

// 6. Scope and nested function practice

function outerFunction() {

    let username = "Sayeed";

    function innerFunction() {

        console.log("Username:", username);

    }

    innerFunction();

}

outerFunction();