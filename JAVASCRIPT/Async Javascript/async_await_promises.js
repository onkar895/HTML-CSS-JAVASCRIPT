//Async functions with Async/await:

// 1. Async/Await is a feature that allows you to write asynchronous code in a more synchronous, readable way.
// 2. "Aync/Await" is a powerful tool for handling asynchronous operations. It allows for more readable and maintainable code 
//      by eliminating the need for callbacks and providing a more intuitive way to handle asynchronous operations.

// 1. async is a keyword that is used to declare a function as asynchronous.
// 2. await is a keyword that is used inside an async function to pause the execution of the function until a promise is resolved.

// Example 1:
// The async...await syntax in ES6 offers a new way write more readable and scalable code to handle promises.
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
}

getData();

// In the above example ,   the getData function is declared as an asynchronous function using the async keyword.
// Inside the asynchronous function, we use the await keyword to wait for the fetch function to complete and retrieve some data from an API.
// Once the data is retrieved, we use await again to wait and parse the retrieved data as JSON.
// And then finally, we log the data to the console.


// Example 2:   Async Await Promises

function helloWorld() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Hello World!');
        }, 2000);
    });
}

async function msg() {
    const msg = await helloWorld();
    console.log('Message:', msg);
}

async function msg1() {
    const msg = await helloWorld();
    console.log('Message:', msg);
}

msg();
msg1();