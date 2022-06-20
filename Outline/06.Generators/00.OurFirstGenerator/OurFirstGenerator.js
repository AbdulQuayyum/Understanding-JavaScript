// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.



const getNumbers = function* () {
    yield 1;
    yield "hello";
    yield true;
    yield { name: 'Alex' };
    return "i am done";
}

const numbersGen = getNumbers();

console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(JSON.stringify(numbersGen.next().value));
console.log(numbersGen.next().value);