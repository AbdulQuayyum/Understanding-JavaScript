// Arrays in JavaScript are the data type used to store a list of values.JavaScript array objects can be stored 
// in variables and dealt with in the same way you deal with any other data type.The difference is that we can 
// access each value inside the list individually, and perform various activities, such as looping over it.

let name = "John"
let names = ["John", "Joe", "Jack", "Jane", "Jerry", "Janet"]

console.log(names)
console.log(names[0])
console.log(names[4])

console.log(names.length)

for (const n of names) {
    console.log(n)
}

names.forEach(function (n, index) {
    console.log(index + " - " + n)
})