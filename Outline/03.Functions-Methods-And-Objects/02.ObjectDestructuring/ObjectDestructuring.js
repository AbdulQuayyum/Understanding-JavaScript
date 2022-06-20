// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.

const getUser = () => {
    return {
        name: 'Abdul-Quayyum',
        surname: 'Alao',
        gender: 'male',
        address: {
            country: 'Nigeria',
            city: 'Lagos',
            countryCode: 'NG',
            fullAddress: {
                streetNumber: 54,
                street: 'Ishaga Road'
            }
        },
        age: 18
    }
};

const user = getUser();

// const name = user.name;
// const age = user.age;
// const country = user.address.country;
const doorNumber = user.address.fullAddress.streetNumber;

const { name: theName, age: theAge, address: { country: theCountry } } = user;
const { address: { fullAddress: { streetNumber: number } } } = user;

console.log(theName);
console.log(theAge);
console.log(theCountry);
console.log(number);