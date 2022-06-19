// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.



// map creates a new array by transforming every element in an array individually. filter creates a new array by removing elements that don't belong. reduce , on the other hand, takes all of the elements in an array and reduces them into a single value.

// Map
let map = [1, 2, 3, 4, 5].map(function (n) {
    return n * 2
})

console.log(map)


console.log("[].map")
console.log(map)

// Filter
console.log("[].filter")
let filter = [1, 2, 3, 4, 5].filter(function (n) {
    return n % 2 === 0
})

console.log(filter)

// Reduce
console.log("[].reduce")
let reduce = [1, 2, 3, 4, 5].reduce(function (accumulator, current) {
    return accumulator + current
})
console.log(reduce)