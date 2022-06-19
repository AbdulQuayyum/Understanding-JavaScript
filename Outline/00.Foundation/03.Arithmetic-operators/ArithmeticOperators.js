// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.



// An arithmetic operator accepts numerical values as operands and returns 
// a single numerical value.The numerical values can be literals or variables.

// The addition operator returns the sum of two values. For example, the 
// following uses the addition operator to calculate the sum of two numbers:
let addition = 2 + 2
// Also, you can use the addition operator with two variables. For example:
let firstPrice = 9.99
// If either value is a string, the addition operator uses the following rules:

// If both values are strings, it concatenates the second string to the first one.
// If one value is a string, it implicitly converts the numeric value into a string and conatenate two strings.
// For example, the following uses the addition operator to add concatenate two strings:
let x = '10',
    y = '20';
let result = x + y
let secondPrice = 1.99
let totalPrice = firstPrice + secondPrice;

// The subtraction operator(-) subtracts one number from another.For example:
let subtraction = 152 - 89

// Javascript uses the slash (/) character to represent the divide operator. The divide operator divides the first value by the second one. For example:
let division = 30 / 10

// If either value is not a number, the JavaScript engine converts it into a number for division. For example:
let secondDivision = '20' / 2

// JavaScript uses the asterisk (*) to represent the multiplication operator. The multiplication operator multiplies two numbers and returns a single value. For example:
let multiplication = 2 * 50

// If either value is not a number, the JavaScript engine implicitly converts it into a number using the Number() function and performs the multiplication. For example:
let secondMultiplication = '5' * 2

// The remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
let remainder = 20 % 6

// Under Addition
console.log(addition)
console.log(totalPrice)
console.log(result)

// Under Sutraction
console.log(subtraction)

// Under Division
console.log(division)
console.log(secondDivision)

// Under Multiplication
console.log(multiplication)
console.lo(secondMultiplication)

// Under Remainder
console.log(remainder)