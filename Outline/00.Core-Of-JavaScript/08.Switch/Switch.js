// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// The objective of a switch statement is to give an expression to evaluate and several different statements to execute based on the value of the expression. The interpreter checks each case against the value of the expression until a match is found. If nothing matches, a default condition will be used.

let person = {
    name: "Abdul-Quayyum",
    age: 18,
}

switch (true) {
    case (person.age == 17):
        console.log(person.name + " is about to be an adult");
        break;
    case (person.age >= 18):
        console.log(person.name + " is an adult");
        break;
    default:
        console.log(person.name + "is not an adult");
}

switch (new Date().getDay()) {
    case 6:
        console.log("Saturday")
        break;
    case 5:
        console.log("Friday")
        break;
    default:
        console.log("I dont know")

}
