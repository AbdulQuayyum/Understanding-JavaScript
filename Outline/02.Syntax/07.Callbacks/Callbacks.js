// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.



function callbackExample(name, callback) {
    console.log(callback(name));
}

let callback = function (name) {
    return "Hola " + name;
}

callbackExample("Alao Abdul-Quayyum", function (name) {
    return "Hola " + name;
});