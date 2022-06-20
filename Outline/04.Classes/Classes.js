// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.

// A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.

class Developer {
    constructor(name, age) {
        console.log(`${name} is a Developer`)
        this.name = name;
        this.age = age;
    }
    static iAmAStaticMethod() {
        console.log("This is a static method inside of the Developer Class")
    }
    codes() {
        console.log(`${this.name} loves to code`)
    }
    eat() {
        console.log(`${this.name} loves to eat`)
    }
    sleep() {
        console.log(`${this.name} loves to sleep`)
    }
    logAge() {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

class FrontEnd extends Developer {
    constructor(codes, eat, stack,) {
        super(codes, eat)
        this.stack = stack
    }

    logStack() {
        console.log(`${this.name} is a ${this.stack} Developer`)
    }

    logAgeFromFrontEnd() {
        super.logAge()
    }
}

class BackEnd extends Developer {
    constructor(codes, eat) {
        super(codes, eat)
    }

    logAgeFromBackEnd() {
        super.logAge
    }
}

const AbdulQuayyum = new FrontEnd("Abdul-Quayyum", 18, "FrontEnd")
AbdulQuayyum.logStack()
AbdulQuayyum.logAgeFromFrontEnd()

const Kanyinsola = new BackEnd("Kanyinsola", 18)
Kanyinsola.logAgeFromBackEnd()
Kanyinsola.codes()
Kanyinsola.eat()
Kanyinsola.logAge()

Developer.iAmAStaticMethod()

const Quayyum = new Developer("Quayyum", 18)
Quayyum.eat()
Quayyum.codes()
Quayyum.sleep()
Quayyum.logAge()