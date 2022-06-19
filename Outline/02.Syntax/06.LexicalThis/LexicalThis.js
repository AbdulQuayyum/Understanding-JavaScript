// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// The value of this in an arrow function is inherited from the enclosing (lexical) scope. Functions have a special variable this that refers to the object via which the method was invoked. As the value of this is dynamically given based on the function invocation, it is sometimes called dynamic this .

const developer = {
    name: "Abdul-Quayyum",
    languages: ["Javascript", "Python"],
    toString: function () {
        this.languages.forEach(languages => {
            console.log(`${this.name} knows ${languages}`)
        })
    }
}

developer.toString()