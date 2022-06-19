// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.

const calculatePay = (yearSalary, bonus = {
    teamBonus: 0,
    employeeBonus: 0
}) => {
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

console.log(calculatePay(22000, { teamBonus: 10000, employeeBonus: 6000 }));