// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

import { coroutine as co } from 'bluebird';

const getRandomUsers = co(function* (n) {
    const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`)
    const data = yield fetchRandomUsers.json();
    return data;
});

getRandomUsers(10).then(randomUsers => {
    randomUsers.results.forEach(user => {
        const { gender, email } = user;
        console.log(`${gender} - ${email}`);
    });
}).catch(err => log);