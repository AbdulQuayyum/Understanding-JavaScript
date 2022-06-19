// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

const hello = () => {
    const es6 = 'ES6';
    return `Hello ${es6}`;
};

const powers =
    [1, 2, 3, 4, 5].map((number, index) => Math.pow(number, index));


const add = (n1, n2) => n1 + n2;

const milesToKm = miles => miles * 1.60934;


console.log(hello());
console.log(powers);
console.log(add(100, 100));
console.log(milesToKm(300));