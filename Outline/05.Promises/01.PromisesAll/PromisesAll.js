// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.



const namesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Adisa', 'Maliki', 'Femi', 'John']);
    }, 3000);

    setTimeout(() => {
        reject("no data back from the server, there was an error");
    }, 5000);
});

const surnamesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Ajanlekoko', 'Musiliu', 'Mutairu', 'Alani']);
    }, 3000);

    setTimeout(() => {
        reject("no data back from the server, there was an error");
    }, 5000);
});

Promise.all([namesPromise, surnamesPromise]).then(data => {
    const [names, surnames] = data;
    for (var i = 0; i < names.length; i++) {
        const name = names[i];
        const surname = surnames[i];
        console.log(`${name} ${surname}`);
    }

}).catch(error => {
    console.log(error);
});