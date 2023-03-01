// Data Types in javascript:

// Primitive or primary:
// 1. Numbers:
let length = 16;
let weight = 77.5;
console.log("The value of length is: " + length);
console.log("The value of weight is: " + weight);

console.log("4*10 to the power 4");
let h = 4e4;
console.log("The value of h is: " + h);

h = 4e-4;
console.log("The value of h is: " + h);


// 2.Strings:
let Name = "Stuart";
let lastName = "Johnson";
console.log(Name);
console.log(lastName);

// if you want to print something in double inverted commas then use '"text"'
let p = '"Hello World"';
console.log(p);

// if you want to print something in single inverted commas then use "'text'"
let p1 = "'Hello World'";
console.log(p1);


// 3. Boolean:
let isboolT = true;
let isboolF = false;
console.log("The value of isboolT is: " + isboolT);
console.log("The value of isboolF is: " + isboolF);

let ab = 3,
    bc = 5,
    cd = 10;
console.log(ab > bc);


// 4. Null:

let string = null;
console.log(string);


// 5. Undefined:

let str = undefined;
console.log(str);



// Composite or reference:

// 1. Arrays:

const cars = ["Audi", "Volvo", "BMW"];
console.log("The name of cars are: " + cars);

console.log("The name of 1st car is: " + cars[0]);
console.log("The name of 2nd car is: " + cars[1]);
console.log("The name of 3rd car is: " + cars[2]);

// An array containing numbers
const numberArray = [0, 1, 2, 3];
console.log(numberArray);

// An array containing different data types
const mixedArray = [1, 'chicken', false];
console.log(mixedArray);

// Nested Arrays:
const food = [
    ['Apple', 'Orange', 'Banana'],
    ['Strawberry', 'Blueberry', 'Raspberry'],
    ['Potato', 'Carrot', 'Broccoli'],
];

// Retrieve the food string at index 1 of the array at index 0
console.log(food[0][1]);
// Output: Orange

// Retrieve the food string at index 2 of the array at index 1
console.log(food[1][2]);
// Output: Raspberry


// 2. Functions:

// Defining the function with return 
function sum(num1, num2) {
    return num1 + num2;
}

// Calling the function
Result = sum(2, 4);
console.log(Result);


// Defining the function without return 
function sayHello(name) {
    console.log("Hello " + name + "!");
}

// Calling the function
sayHello("Onkar");



// 3. Date:  

const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.toDateString());



// 4. Object arrays:

// Object always declared in 'key-value' pairs.
const person = { firstName: "John", lastName: "Doe", age: 24 };

// Object properties can be accessed using the dot notation: 1st way
console.log(person.firstName, person.lastName);

// Bracket notation must be used if the property name has spaces, special characters, or begins with a number: 2nd way
console.log(person["age"]);

// To add particular string or numbers
person.email = "onkarkarale4@gmail.com";
console.log(person.email);

// To update the existing data in the object
person.age = 28;
console.log(person.age);


// Object methods: 
// Object methods are actions that can be performed on objects that means we can also add functions in the object arrays.
// Methods are stored in properties as function definitions.

const person1 = {
    firstName: 'Elizabeth',
    lastName: 'Harmon',
    age: 22,
    eyeColor: 'Hazel',

    greeting: function() {
        console.log("Hi, I am", person1.firstName, person1.lastName);
    }
};
// Function calling
console.log(person1.greeting());