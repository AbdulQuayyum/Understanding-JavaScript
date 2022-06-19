// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.



for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let persons = [
    { userName: "Abdul-Quayyum", age: 18 },
    { userName: "John", age: 99 }
]

// for (var i = 0; i <= persons.length; i++) {
//     console.log(persons[i].userName)
//     console.log(persons[i].age)
//     console.log(".......................")
// }

let number = 0

while (number < 5) {
    number++;

    if (number < 5) {
        continue;
    }

    console.log(number);

}

let i = 0

do {
    i++
    console.log(i)
} while (false)