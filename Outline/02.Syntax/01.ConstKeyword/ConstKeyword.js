// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// In JavaScript, const allows you to only modify the value of the array, but the reference to the array cannot be changed.The const variable creates only reference to the value.Object properties can be changed but the reference to an object cannot be changed.

const person = {}

person['name'] = "Abdul-Quayyum"

console.log(person.name)

const array = []
array.push("Abdul-Quayyum from Kwara State")

console.log(array[0]) 