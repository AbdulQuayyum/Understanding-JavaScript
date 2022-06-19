// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.



// “If” statements: where if a condition is true it is used to specify execution for a block of code.
// “Else” statements: where if the same condition is false it specifies the execution for a block of code.
let example = true

if (example) {
    console.log("This is an example of if statement")
} else {
    console.log("This is not an example of if statement")
}

let person = {
    name: "Abdul-Quayyum",
    age: 18,
}

if (person.age >= 18) {
    console.log(person.name + " is an adult");
} else if (person.age == 17) {
    console.log(person.name + " is about to be an adult");
} else {
    console.log(person.name + " is not an adult");
}