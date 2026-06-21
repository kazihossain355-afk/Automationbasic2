// Assignment: Decode this code and explain
// Topic: Objects, Normal Function, Arrow Function, this keyword



/*
Explanation:

1. An object named user is created.
2. It contains one property: name = "Alice".
3. logNormal() uses a normal function inside setTimeout().
4. Normal functions create their own "this", so this.name is undefined.
5. logArrow() uses an arrow function.
6. Arrow functions use the same "this" as the parent function.
7. Therefore this.name refers to user.name and prints "Alice".

Output:
Normal: undefined
Arrow: Alice
*/const user = {
    name: 'Alice',

    logNormal() {
        setTimeout(function() {
            console.log('Normal:', this.name);
        }, 100);
    },

    logArrow() {
        setTimeout(() => {
            console.log('Arrow:', this.name);
        }, 100);
    }
};

user.logNormal();
user.logArrow();