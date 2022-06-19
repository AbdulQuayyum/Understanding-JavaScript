// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// Spread syntax(other than in the case of spread properties) can only be applied to iterable objects like Array, or with iterating functions such as map(), reduce(), and assign().To use spread syntax with these objects, you will need to provide an iterator function.

const arrayOne = ["Faidah", "Abdul-Quayyum", "Aisha"]
const arrayTwo = ["FirstChild", "SecondChild", "ThirdChild", "FourthChild"]

const concatArray = [...arrayOne, ...arrayTwo]

concatArray.forEach(function (name) {
    console.log(name)
})

const name = 'Abdul-Quayyum'
const nameToArray = [...name]
nameToArray.forEach(function (letter) {
    console.log(letter)
})

const addNumbers = function (n1, n2, n3) {
    return n1 + n2 + n3
}

const numbers = [4, 1, 9]

// Long and Bad Code instead Just Spread It in an array
// const sumOfNumbers = addNumbers(numbers[0], numbers[1], numbers[2])
const sumOfNumbers = addNumbers(...numbers)

console.log(sumOfNumbers)