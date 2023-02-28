console.log("Here is the log starts");

// var start:

var x = 10;
if (x < 20) {
    var x = 6;
    console.log("The value of x inside: " + x);
}

console.log("The value of x outside: " + x);


var z = 10;
if (z < 20) {
    const z = 6;
    console.log("The value of x inside: " + z);
}

console.log("The value of x outside: " + z);

// var end.


// const keyword start:

// So here the value of pi is 'constant' means fixed and cannot be changed later.
// const pi = 3.14;
// console.log("The value of pi is:" + pi);

const pi = 10;

// Declaration of a function
function areaofcircle(r) {
    const pi = 3.14;
    console.log("The value of pi inside the function:" + pi);
    console.log("The area of circle is: " + pi * r * r);
}

console.log("The value of pi outside the function:" + pi);
// calling of a function
areaofcircle(10);

// const keyword end


// Let keyword start:

var x = 10;

if (x < 20) {
    let x = 6;
    // here u can see that variable x that is limited to the scope of a block statement
    console.log("The value of x inside: " + x);
}

console.log("The value of x outside: " + x);


let y = 1;

if (y === 1) {
    let y = 2;

    console.log(y);
    // Expected output: 2
}

console.log(y);
// Expected output: 1

// Let keyword end