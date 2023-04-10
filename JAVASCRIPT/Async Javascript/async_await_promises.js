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

// async functions always returns the promise, other values are wrapped inside the promise automatically.
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


// Example 3:


async function Weather() {
    let puneWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 degrees");
        }, 2000)
    })

    let mumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 degrees");
        }, 5000)
    })

    console.log("Fetching pune weather plz wait....")
    let puneW = await puneWeather;
    console.log("Fetched pune Weather :" + puneW);

    console.log("Fetching mumbai weather plz wait....")
    let mumbaiW = await mumbaiWeather;
    console.log("Fetched mumbai Weather :" + mumbaiW);

    return [puneW, mumbaiW];

}

const Wait = async() => {
    console.log("HI, I'm Waiting")
}

const main1 = async() => {
    console.log("Welcome to weather control room")
    let a = await Weather();
    let b = await Wait()
        // let x = Weather();
        // x.then((val) => {
        //     console.log(val)
        // })
}

main1();


// Async Function Error Handling:

// 1. JavaScript async functions uses try...catch statements for error handling.
// 2. This method allows shared error handling for synchronous and asynchronous code.

// The try...catch syntax has two main blocks that is try and catch.
// try and catch works like this:
//    1. Firsty the code inside the try is executed.
//    2. If there is no errors catch is ignored else catch will be executed.


setTimeout(() => {
    console.log("Hacking wifi....plz wait....")
}, 1000);

// handling error : so if u want to show existing error but u also want to be execute furhter code then u should use go with try...catch concept
// Rememeber that inside try we can only handle synchronous code.
try {
    console.log(rahul) // Error
} catch (error) {
    // console.log(error);
    console.log("Invalid data");
}

setTimeout(() => {
    console.log("Fetching username and password....plz wait....")
}, 3000);

setTimeout(() => {
    console.log("Hacking rahul's insta id....plz wait....")
}, 5000);

setTimeout(() => {
    console.log("Username and password of rahul (dwar123456) fetched.");
}, 7000);