// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// Promises simplify deferred and asynchronous computations. A promise represents an operation that hasn't completed yet.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data back from the server")
    }, 3000)

    setTimeout(() => {
        reject("No data back from the server, there was an error")
    }, 3000)
})
promise.then(response => {
    console.log(response)
}).catch(err => {
    console.log(err)
})