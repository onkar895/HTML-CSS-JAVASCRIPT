// 1. JSON: JSON stands for JavaScript Object Notation
// 2. JSON is a text format for storing and transporting data.
// 3. JSON is often used when data is sent from a server to a web page.
// 4. JSON data is written as name/value pairs, just like JavaScript object properties.
// 5. JSON Syntax Rules:
//     1. Data is in name/value pairs,
//     2. Data is separated by commas,
//     3. Curly braces hold objects,
//     4. Square brackets hold arrays.
//     5. In JSON objects both properties (key, value) are in double quotes(" ").
// 6. A common use of JSON is to read data from a web server, and display the data in a web page.

// Example:  Converting a JSON Text to a JavaScript Object.

// First, create a JavaScript string containing JSON syntax:

let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Steve" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// Then, use the JavaScript built-in function 'JSON.parse()'which is used to convert the string into a JavaScript object:
const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
    obj.employees[1].firstName + " " + obj.employees[1].lastName;



const gettodos = (callback) => {

    const request = new XMLHttpRequest();
    request.open("GET", "todolist.json"); // here we are requesting 'todolist.json' file 
    request.send();
    request.addEventListener(
        'readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                callback(request.responseText);
                const responseData = JSON.parse(request.responseText); // JSON.parse() is used to convert the string into a JavaScript object:
                callback(responseData);
                console.log(request, request.readyState);
                console.log(responseData); // returns an array of objects
            }
        }
    )
}

gettodos(() =>
    console.log("callback fired")
)