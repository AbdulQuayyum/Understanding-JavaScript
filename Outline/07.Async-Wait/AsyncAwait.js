// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.



const logName = async (name) => {
    console.log(name);
    // 1. we can yield promises using await
    const transformName = new Promise((resolve, reject) => {
        setTimeout(() => resolve(name.toUpperCase()), 1000);
    });

    const result = await transformName;

    // 2. return a promise
    return result;
}

logName("antonio").then(res => {
    console.log("result from async function = " + res);
});

////////////

const getRandomUsers = async n => {
    try {
        const fetchRandomUsers = await
            fetch(`httpsrandomuser.me/api/?results=${n}`)
        const data = await fetchRandomUsers.json();
        data.results.forEach(user => {
            const { gender, email } = user;
            console.log(`${gender} - ${email}`);
        });
        return data;
    } catch (err) {
        console.log(err);
    }

}

getRandomUsers(5);