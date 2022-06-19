// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// Comparison operators compare two values and give back a boolean value: either true or false. Comparison operators are used in decision making and loops.

// Logical operators perform logical operations: AND, OR and NOT.

console.log("Comparison Operators")
console.log(10 == 10);
console.log(10 < 10);
console.log(10 <= 10);
console.log(10 > 10);
console.log(10 >= 10);
console.log(10 != 10);
console.log(10 != 11);

console.log("Logical Operators")
// Both conditions have to be true for the answer to return as true
console.log(10 == 10 && 20 == 20 && 100 == 100);
console.log(10 == 10 && 20 != 20);

// At least one condition has to be true to return true
console.log(20 == 30 || 10 == 10);

console.log(!(10 == 10));
console.log(!(10 == 20));

if ((10 == 20)) {
    console.log("if statement was executed");
}

console.log("hello" == "hola")