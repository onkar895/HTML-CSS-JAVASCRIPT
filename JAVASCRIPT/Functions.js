function helloworld() { // Function Defination
    console.log("Hello World");
}

helloworld(); // Function Calling


// 1st Method: Normal Function

// With return type
// Example 1:
function sum(num1, num2) {
    return num1 + num2;
}

result = sum(3, 2);
console.log(result);

// Example 2:
// Without return, so the function doesn't output the sum
function sum(n1, n2) {

    console.log(n1 + n2);
}

sum(4, 3);

// Example 3:
// products: 10 15 12 , tax: 30%
const invoice = function(products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log("Total amount is: " + invoice([10, 15, 12], 0.3));



// 2nd method: Anonymous Function
// Here we are storing a function in welcome variable. 
const welcome = function() {
    console.log("Welcome to functions");
}; // If you are storing a function in some variable then u have to put semicolon after the end of function.

welcome();


const wel = function(name) {
    console.log(`Hello ${name}`);
};

wel("Onkar");



// 3. Arrow Functions


// Normal Function
console.log("Normal Function");
const Calarea = function(radius) {

    let area = 3.14 * radius ** 2;
    console.log(area);
}

Calarea(5);

// Using Arrow function
console.log("Using Arrow Function");
const CalArea = (radius) => {

    return 3.14 * radius ** 2;

}

console.log(CalArea(5));


// 1. Arrow function with no arguments:

const printHello = () => {
    console.log('hello');
};

printHello();
// Output: hello


// 2. Arrow function with a single argument:

const checkWeight = (weight) => {
    console.log(`Baggage weight is : ${weight} kilograms.`); //here we have used String Interpolation using (` `) sign.
};

checkWeight(25);
// Output: Baggage weight is : 25 kilograms.


// 3. Arrow function with two arguments:

const Sum = (firstP, secondP) => {
    return firstP + secondP;
};

console.log(Sum(2, 5));
// Output: 7


const invoiceARR = (product, tax) => {
    let total = 0;
    for (let i = 0; i < product.length; i++) {
        total += product[i] + product[i] * tax;
    }
    return total;
}
console.log("Total amount is: " + invoice([10, 15, 12], 0.3));


// 4. Concise arrow function:

const multiply = (a, b) => a * b;

console.log(multiply(2, 30));
// Output: 60


console.log("Using concise Arrow Function");
const CalcArea = (radius) => 3.14 * radius ** 2;

console.log(CalcArea(5));



// Callback Function:

//Example 1:
// While calling the greet() function, two arguments (a string value and a function) are passed.
// The callMe() function is a callback function.
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);


//Example 2:
// By using setTimeout method
function person(name, person2) {
    setTimeout(function() {
        console.log("My name is: " + name);
        person2();
    }, 2000)
}

function person2() {
    console.log("I'm using callback function here");
}

// when we are going to call the function with some arguments then we can also pass the another function as an argument which is person2 in this case.
person('Onkar', person2);