// In JavaScript, we can declare a variable in different ways by using different keywords.
// Each keyword holds some specific reason or feature in JavaScript.Basically we can declare variables 
// in three different ways by using var, let and const keyword.Each keyword is used in some specific conditions.

// var: This keyword is used to declare variable globally.If you used this keyword to declare variable then the 
// variable can accessible globally and changeable also.It is good for a short length of codes, if the codes get huge then you will get confused.
var userName = "Quayyum"

// let: This keyword is used to declare variable locally. If you used this keyword to declare variable then 
// the variable can accessible locally and it is changeable as well. It is good if the code gets huge. 
let age = 18

// const: This keyword is used to declare variable locally. If you use this keyword to declare a variable then 
// the variable will only be accessible within that block similar to the variable defined by using let and 
// difference between let and const is that the variables declared using const values can’t be reassigned.
const hasJob = true
const empty = undefined

// The console. log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.
console.log(userName + " is an example of " + typeof userName)
console.log(age + " is an example of " + typeof age)
console.log(hasJob + " is an example of " + typeof hasJob)
console.log(empty + " is an example of " + typeof empty)

