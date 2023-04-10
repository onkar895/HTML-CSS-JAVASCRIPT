// Callback Function: 

// A callback is simply a piece of JavaScript that gets executed after something else has finished executing.

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


// Example 2:
// So javascript is a single threaded lang. so that means the code will be executed one line at a time.
setTimeout(function() { // So, here setTimeout will take this callback function and it will store it in a seperate space.
        console.log("Timer")
    }, 3000)
    // So javascript won't wait for setTimeout to finish here, that means it does'nt wait till 5sec to complete this function 
    // rather than it will go to another line to execute another code which is function x and y.
function x(y) {
    console.log("x")
    y();
}

x(function y() {
    console.log("y");
})


//Example 3:
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

// Example 4:

function add(x, y) {
    return x + y
}

function divide(x, y) {
    return x / y
}

function compute(callBack, x, y) {
    return callBack(x, y)
}

console.log(compute(add, 10, 5))
console.log(compute(divide, 10, 5))


// Example 5:

// Declare function
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { name: "John", age: 30 };
//         callback(data);
//     }, 3000);
// }

/// Execute function with a callback
// fetchData(function(data) {
//     console.log(data);
// });

// console.log("Data is being fetched...");


// Example 6:
// Error Handling
function loadscript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("Loaded script:" + src);
        callback(null, src);
    }

    // error handling
    script.onerror = function() {
        console.log("error loading script:" + src);
        callback(new error("src got some error"));
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
        console.log(error);
        return
    } else {
        alert("You called " + src);
    }

}

function hi(src) {
    console.log("You called an another " + src);
}

loadscript("https://www.google.com", hello);



// Callback hell or pyramid of Doom:

// 1. Callbacks provide a useful way to handle asynchronous operations. However, when many callbacks are nested, 
// the code can be complex and hard to read and understand.

// 2. This happens when you chain multiple callbacks together, one after the other, creating a pyramid - like structure of indentation called callback hell, 
// also known as the "Pyramid of Doom".

// Example of callback hell:

// getData(function(a) {
//     getMoreData(a, function(b) {
//       getEvenMoreData(b, function(c) {
//         getEvenEvenMoreData(c, function(d) {
//           getFinalData(d, function(finalData) {
//             console.log(finalData);
//           });
//         });
//       });
//     });
//   });

// 1. In the avove example ,  The getData function takes a callback as an argument and is executed after data is retrieved.
// 2. The callback function then takes the data and calls the getMoreData function, which also takes a callback as an argument, and so on.

//  This nesting of callbacks can make the code difficult to maintain, and the indentation makes it even harder to see the overall structure of the code.
//  To avoid this callback hell, we can use a more modern way of handling async operations known as promises.