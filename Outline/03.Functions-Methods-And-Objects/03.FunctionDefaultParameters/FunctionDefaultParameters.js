// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.



const getUser = () => {
    return {
        name: 'Abdul-Quayyum',
        surname: 'Alao',
        gender: 'male',
        address: {
            country: 'Nigeria',
            city: 'Lagos',
            postCode: 'NG',
            fullAddress: {
                doorNumber: 54,
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
const doorNumber = user.address.fullAddress.doorNumber;

const { name: theName, age: theAge, address: { country: theCountry } } = user;
const { address: { fullAddress: { doorNumber: number } } } = user;

console.log(theName);
console.log(theAge);
console.log(theCountry);
console.log(number);