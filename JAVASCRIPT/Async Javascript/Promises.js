// Introduction to promises:

// 1. Promises provide a more elegant way of handling the asynchronous flow of a program compared to callback functions.
// 2. A promise in JavaScript is a placeholder for a future value or action. By creating a promise, you are essentially telling the JavaScript 
//     engine to "promise" to perform a specific action and notify you once it is completed or fails.
//     The code either executes or fails , in both the cases subscriber will be notified.
// 3. Next, callback functions are then attached to the promise to handle the outcome of the action. 
//     These callbacks will be invoked when the promise is fulfilled (action completed successfully) or rejected (action failed).


// How to create a promise: 

// 1. To create a promise, you'll create a new instance of the Promise object by calling the Promise constructor.
// 2. The constructor takes a single argument: a function called executor. The "executor" function is called immediately when the promise is created, 
//     and it takes two arguments: a 'resolve' function and a 'reject' function.
//     resolve and reject are two callbacks provided by javascript engine itself.
// 1. resolve(value): If the job is finished succesfully. 
// 2. reject(error): If the job fails or gets an error message.

// Initialize a promise
const my1stPromise = new Promise(function(resolve, reject) {});
console.log(my1stPromise);

// As you will see in the console screen that, the promise has a pending status and an undefined value. 
// This is because nothing has been set up for the promise object yet, so it's going to sit there in a pending state forever without any value or result.

// Now, let's set up my2ndPromise to resolve with a string printed to the console after 2 seconds.
const my2ndPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from the promise after 3sec!"); // resolve is called here
    }, 3000);
});
console.log(my2ndPromise);
// Now, when you inspect my2ndPromise object, you'll find that it has a status of "fulfilled", 
// and a value set to the string you passed to the resolve function.
// 1. State: Initially pending, then changes to either "fullfilled" when resolved or "rejected" when reject is called.
// 2. result or value: Initially undefined,then changes to value if resolved or gets error when rejected.



// A promise has three states:

// 1. Pending: initial state, neither fulfilled nor rejected.
// 2. Fulfilled: meaning that an operation was completed successfully.
// 3. Rejected: meaning that an operation failed.


// How to Consume a Promise:

// Consuming a promise involves the following steps:

//1. Obtain a reference to the promise:    To consume a promise, you first need to obtain a reference to it. 
//    Based on the code from the previous section, our reference to a promise will be the my2ndPromise object.
// 2. Attach callbacks to the promise:    Once you have a reference, you can attach callback functions by using the .then and .catch methods to recieve an final output. 
//     The .then method is called when a promise is fulfilled.
//     and the .catch method is called when a promise is rejected.
// 3. Wait for the promise to be fulfilled or rejected:    Once you've attached callbacks to the promise, 
//     you can wait for the promise to be fulfilled or rejected.

my2ndPromise
    .then((result) => {
        console.log(result);
    })
my2ndPromise.catch((error) => {
    console.log(error);
});
my2ndPromise.finally(() => {
    console.log("hiiiiii");
})

// Once the promise is fulfilled, the .then callback method will be called with the resolved value. 
// And if the promise is rejected, the .catch method will be called with an error message.
// You can also add the .finally() method, which will be called after a promise is settled. 
// This means that .finally() will be invoked regardless of the status of a promise (whether resolved or rejected).


// Example 2:

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("I'm a promise and I'm fullfilled");
        resolve(true); // value  seen in the console is : true
    }, 5000);
});
// console.log(p1);

// To get thje value
p1.then((value) => {
    console.log(value)
})


let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("I'm a promise and I'm rejected");
        reject(new Error("I'm an error"));
    }, 5000);
});
// console.log(p2);

// To catch the error
// When a promise is rejected, it will trigger the .catch() method, which handles errors. 
// The .catch() method takes a single argument, which is the error thrown.
p2.catch((error) => {
    // console.log("Some error occured in p2")
})

p2.then((value) => { // error resolved
    console.log(value);
}, (error) => { // error detected
    console.log(error);
})



// Promise chaining:

// 1. Promise chaining is a pattern that allows for a clear and easy-to-understand approach to handling asynchronous operations.
// 2. The pattern involves connecting multiple promises in a sequence, where the output of one promise is passed as input to the next promise.
// 3. The linking of the promises is achieved using the then() method. This method uses a callback function as an argument and returns a new promise. 
// 4. The new promise is then resolved with the value returned by the callback function.

// Example 1:
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("I'm 1st promise and I'm fullfilled");
        resolve(56);
    }, 2000);
});

p3.then((val) => {
    console.log(val)

    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => { resolve('Promise 2') }, 2000);
    })
    return p4;
}).then((val) => {
    console.log("I'm done here by logging p4");
    return 2; // random returning
}).then((val) => {
    console.log("returning the value 2 here");
})

// 1. The above code creates a Promise object p3 that resolves after a delay of 2 seconds and logs a message to the console. 
// 2. Then, it uses the .then() method to execute a callback function that logs the resolved value of p3 to the console 
// and creates a new Promise object p4 that resolves after a delay of 2 seconds. 
// 3. The callback function returns p4, which is then used in another .then() method to execute a callback function that logs a message to the console and 
// returns a random value of 2. Finally, another .then() method is used to execute a callback function that logs a message to the console 
// indicating that the promises are finally done executing.
// It's important to keep in mind that .then methods are executed asynchronously and in order, each one waiting for the previous one to be resolved, 
// and that the returned value of each .then will be passed as an argument to the next one.
// When a promise is rejected, it will trigger the .catch() method, which handles errors. \
// The .catch() method takes a single argument, which is the error thrown.

// Example 2:
const loadscript1 = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript";
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            resolve("Script has been loaded")
        }
        script.onerror = () => {
            reject(0);
        }
    })
}

let p = loadscript1("http://127.0.0.1:5500/JAVASCRIPT/Async.js");
p.then((val) => {
    console.log(val)
    return loadscript1("http://127.0.0.1:5500/JAVASCRIPT/Async.js");
}).then((val) => {
    console.log("second script ready")
}).catch((error) => {
    console.log("we are sorry but we having some problems loading this script");
})



// How to Use the Promise.all Method: 

// The Promise.all() method takes an array of promises as input and returns a single promise that is fulfilled 
// when all input promises have been fulfilled. It can be useful when you wait for multiple promises to be resolved before taking action.
let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
let promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
let promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3');
// Here, promise1, promise2, and promise3 are promises that are fetching data from three different URLs.

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    })



// How to Use the Fetch API with Promises:

// 1. The Fetch API is a built-in JavaScript feature that allows you to make network requests, such as fetching data from a server. 
// 2. It is a modern alternative to the older XMLHttpRequest API and is designed to be easier and more powerful.

fetch('https://some-api.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// 1. The fetch() method is used to make a request to the server located at "https://some-api.com/data". 
// 2. The returned value is a promise that will be fulfilled with the server's response.
// 3. The first.then() method is called to consume the promise and extract JSON data from the response.
// 4. The next then() method is called to log the extracted data to the console.
// 5. If any errors occur, they will be caught in thecatch () method and logged to the console.

fetch("JSON/todolist.json").then((response) => {
    console.log("Resolved data is: ", response)
    return response.json();
}).then((data) => {
    console.log(data);
})