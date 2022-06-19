// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.



const names = ["Quayyum", "Faidah", "Aisha", "MIliano", "Bazzi"]

// const Quayyum = names[0];
// const Faidah = names[1];
// const Aisha = names[2];

const [Quayyum, Aisha, ...restOfNames] = names;

console.log(`${Quayyum} ${Aisha}`);
console.log(restOfNames);
console.log(restOfNames.length);