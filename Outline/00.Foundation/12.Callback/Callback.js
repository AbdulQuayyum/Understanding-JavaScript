// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

function callbackExample(name, callback) {
    console.log(callback(name))
}

let callback = function (name) {
    return "Wagwan " + name
}

callbackExample("Alao Abdul-Quayyum", function (name) {
    return "Wagwan " + name
})