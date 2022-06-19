// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values.

// In case the behavior of the implicit conversion is not sure, the constructors of a data type can be used to convert any value to that datatype, like the Number(), String() or Boolean() constructor.

console.log("With type of coercion")

console.log(typeof 0 + " " + typeof false)
console.log(0 == false)

console.log(typeof 0 + " " + typeof false)
console.log("0" == false)

console.log(typeof 1 + " " + typeof "1")
console.log(1 == "1")

console.log("Without type of coercion")

console.log(typeof 0 + " " + typeof false)
console.log(0 === false)

console.log(typeof 0 + " " + typeof false)
console.log("0" === false)

console.log(typeof 1 + " " + typeof "1")
console.log(1 === "1")