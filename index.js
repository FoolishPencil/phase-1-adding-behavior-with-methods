class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says meow!`;
    }
};

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says woof!`;
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        if (this.sex === "male") {
            return `It's me! ${this.name}, the parrot!`;
        } else {
            return `${this.name} says squawk!`;
        }
    }
}

// Cat Instances
const cat1 = new Cat("Whiskers", "female");
console.log(cat1.speak()); // => Whiskers says meow!

// Dog Instances
const dog1 = new Dog("Fido", "male");
console.log(dog1.speak()); // => Fido says woof!

// Bird Instances
const bird1 = new Bird("Polly", "female");
console.log(bird1.speak()); // => Polly says squawk!

const bird2 = new Bird("Rio", "male");
console.log(bird2.speak()); // => It's me! Rio, the parrot!

