// Assignment:
// Create a function named greetUser with a default parameter username = "Guest". Return the message "Welcome, username".

function greetUser(username = "Guest") {
    return "Welcome, " + username;
}

console.log(greetUser());

console.log(greetUser("Kazi"));