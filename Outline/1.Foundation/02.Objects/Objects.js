// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

const quayyumInfo = {
    userName: "Alao Abdul-Quayyum",
    age: 18,
    hasJob: true,
    dateOfBirth: "22-06-2004",
    address: {
        countryCode: "+234",
        country: "Nigeria"
    }
}
// console.log(quayyumInfo)
console.log(JSON.stringify(quayyumInfo))


console.log(quayyumInfo.userName);
console.log(quayyumInfo.age)
console.log(quayyumInfo.hasJob)

console.log(Object.values(quayyumInfo))