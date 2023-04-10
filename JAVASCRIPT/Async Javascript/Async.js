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

// 1. setTimeout() with a Callback:

// setTimeout() accepts two arguments:
//  1. A callback function that is executed asynchronously
//  2. The minimal number of milliseconds a program waits before executing the callback


// 2. async - javascript - set - interval:

// setInterval() accepts two arguments:
// 1. A callback function that is executed asynchronously
// 2. The number of milliseconds for how frequently the callback function executes



// 1. setTimeout() with a Callback:
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



//  How To Make an HTTP Request in JavaScript Using XMLHttpRequest (AJAX):

// 1. HTTP requests in JavaScript are a set of predefined methods used for interacting with data stored on servers.
// 2. Every request sent to a server includes an endpoint(URL) and the type of request being sent(GET, POST). 
// 3. You can see an endpoint as a gateway between two programsː the client and the server.
// 4. The client is the program that sends a request while the server is the one that receives the request.
// 5. The server sends back a response depending on the validity of the request.
// 6. If the request is successful, the server sends back data in either XML or JSON format(JSON in most cases), 
// and if the request fails, the server sends back an error message.
// 7. If u are written a wrong url then, u will get a error status code 404 which means that url is not found.

// XMLHttpRequest: 
// 1. It is a built-in JavaScript object used for interacting with servers and loading content in web pages without reloading the browser.
// 2. AJAX is used to make asynchronous HTTP requests. This simply means that while a response from a request is pending, other parts of your JavaScript 
// code can continue running without waiting for the request to complete first.

// 3. How To Send a GET Request in JavaScript Using XMLHttpRequest:

// GET Request: 
// You make use of the GET request when you want to retrieve data from a server.

// Steps to follow:
// 1. Create a new XMLHttpRequest object.
// 2. Open a connection by specifying the request type and endpoint (the URL of the server).
// 3. Send the request.
// 4. Listen for the server’s response.

// To make an HTTP call in Ajax, you need to initialize a new XMLHttpRequest() method.
const request = new XMLHttpRequest(); // created new XMLHttpRequest object.
// setting up the request
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
// JSONPlaceholder is a free online REST API that you can use whenever you need some fake data.
// 1. If u are write a right url then, the status code will be 200.
// 2. If u are write a wrong url then, u will get a error status code such as 404 which means that url is not found.
// 3. Finally, we used the open() method here to tie the HTTP method and URL endpoint together and call the send() method to fire off the request.
// 4. We then specified the request type (GET) and the endpoint where the request will be sent to (“https://jsonplaceholder.typicode.com/users“)ː
request.send();
// In order to send the request to the server, we used the send() method.

request.addEventListener(
    'readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) { // readystate is equal to 4, means the task or request is done.
            console.log(request, request.readyState);
        }
    }
)

// The onreadystatechange property has two methods, 'readyState' and 'status' which allow us to check the state of our request.
// The readystatechange is a event which fires everytime a state is changed.
// Then, We logged the HTTP response(request in this case) to the console by using the XMLHTTPRequest.readystatechange property 
// which contains the event handler to be called when the readystatechanged event is fired.
// So here request.readyState returns 4 states. 
// If readyState is equal to 4, it means the request is done. The readyState property has 5 responses.