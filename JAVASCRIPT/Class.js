// JavaScript class is similar to the Javascript constructor function, and it is merely a syntactic sugar.

// The constructor function is defined as:

// constructor function
function ppl() {
    this.name = 'John',
        this.age = 23
}

// create an object
const ppl1 = new ppl();
// new keyword:  creates an new empty object, takes that object and sets the value of this to be an empty object and then calls the constructor method in bthe class.
console.log(ppl1);


// Instead of using the function keyword, you use the class keyword for creating JS classes. For example,

// creating a class
// The constructor() method inside a class gets called automatically each time an object is created.
// Example 1:
class Person {
    constructor(name) {
        this.name = name;
    }
}

// creating an object
// Here, person1 and person2 are objects of Person class.
const person1 = new Person('John');
const person2 = new Person('Wick');

console.log("First Name: " + person1.name); // John
console.log("Last Name: " + person2.name); // Wick


// It is easy to define methods in the JavaScript class. You simply give the name of the method followed by (). For example,


// Example 2:
class Pers {
    constructor(name) {
        this.name = name;
    }

    // defining method
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

let person3 = new Pers('John');

// accessing property
console.log(person3.name); // John

// accessing method
person3.greet(); // Hello John


// Example 3:
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        // create an object date
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
    "My car is " + myCar.age() + " years old.";
document.getElementById("demo").style.color = 'blue';


// Example 4:
class foodItem {
    constructor(type, name, price) {
        this.type = type;
        this.name = name;
        this.price = price;
    }

    food() {
        console.log("Type of food item is: " + (this.type));
        console.log("Name of food item is: " + (this.name));
        console.log("Price of food item is : Rs." + (this.price));
    }
}

const Items = new foodItem("Burger", "HotDog", 120);
Items.food();