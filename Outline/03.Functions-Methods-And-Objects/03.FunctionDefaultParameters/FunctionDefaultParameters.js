// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// The default parameter is a way to set default values for function parameters a value is no passed in (ie.it is undefined ). In a function, Ii a parameter is not provided, then its value becomes undefined.In this case, the default value that we specify is applied by the compiler.

const calculatePay = (yearSalary, bonus = {
    teamBonus: 0,
    employeeBonus: 0
}) => {
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

console.log(calculatePay(2000, { teamBonus: 100, employeeBonus: 50 }));  