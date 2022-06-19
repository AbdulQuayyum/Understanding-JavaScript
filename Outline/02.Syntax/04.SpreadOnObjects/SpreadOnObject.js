// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// Object spread operator can be used to clone an object or merge objects into one.The cloning is always shallow.When merging objects, the spread operator defines new properties while the Object.assign() assigns them.


const address = {
    LGA: "Surulere",
    state: "Lagos",
    country: "Nigeria"
}

const name = {
    firstName: "Abdul-Quayyum",
    lastName: "Alao"
}

const person = { ...address, ...name }

console.log(JSON.stringify(person, null, 2))