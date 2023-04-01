// Example 1:

function myDisplayer(something) {
    document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// In the example above, myDisplayer is the name of a function.
// It is passed to myCalculator() as an argument.
// In the real world, callbacks are most often used with asynchronous functions.
// A typical example is JavaScript setTimeout().

// setTimeout() with a Callback:
// Example 1:
setTimeout(myFunction, 2000);

function myFunction() {
    document.getElementById("demo").innerHTML = "I love You !!";
}

// In the example above, myFunction is used as a callback.
// myFunction is passed to setTimeout() as an argument.
// 3000 is the number of milliseconds before time - out, so myFunction() will be called after 3 seconds.

// Example 2:
let greet_one = "Hello"
let greet_two = "World!!!"
console.log(greet_one)
setTimeout(function() {
    console.log("Asynchronous");
}, 4000)
console.log(greet_two);

// In the above example, if you run the code on your machine you will see greet_one and greet_two logged even there is code in between those 2 logs.
// Now, setTimeout is asynchronous so it runs in background, allowing code after it to execute while it runs.
// After 4seconds, Asynchronous will print because we set a time of 4 seconds in setTimeout to execute it after 4 seconds.


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
// By using setTimeout
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

// Example 3:

function add(x, y) {
    return x + y
}

function divide(x, y) {
    return x / y
}

function compute(callBack, x, y) {
    return callBack(x, y)
}

console.log(compute(add, 10, 5)) // 2
console.log(compute(divide, 10, 5))