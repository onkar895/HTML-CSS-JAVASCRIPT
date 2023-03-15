// if(some condition is true){
//     execute the code
// }


// Without using for loop
const cars = ["Audi", "Volvo", "BMW", "Marcedes", "Range Rover", "Amaze"];

console.log("The name of 1st car is: " + cars[0]);
console.log("The name of 2nd car is: " + cars[1]);



// Using simple For loop
console.log("1. Simple for loop:\n");
for (let i = 0; i < cars.length; i++) {
    // console.log("The value of car is:" + cars);
    console.log("The name of " + (i + 1) + ". car is: " + cars[i]);
}

//  For loop with multi expressions
console.log("2. For loop with multi expressions:\n");
for (let i = 0; i < cars.length && i < 3; i++) {
    // console.log("The value of car is:" + cars);
    console.log("The name of " + (i + 1) + ". car is: " + cars[i]);
}


// Print 1st 10 natural numbers
console.log("The 1st 10 natural numbers using for loop: ");
for (let count = 1; count <= 10; count++) {
    console.log(count);
}


// While Loop

console.log("1. Simple while loop:\n");

let i = 0;
while (i < cars.length) {
    console.log("The name of " + (i + 1) + ". car is: " + cars[i]);
    i++;
}


console.log("2. The 1st 10 natural numbers using while loop: ");
let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}



// Do while loop

console.log("1. Simple do-while loop:\n");
let j = 0;
do {
    console.log("The name of " + (j + 1) + ". car is: " + cars[j]);
    j++;
} while (j < cars.length);


console.log("2. The 1st 10 natural numbers using do-while loop: ");
let counter = 0;
do {
    console.log(counter);
    counter++;
} while (counter < 10);


// Conditional statements:

console.log("Conditional statements:");

let age = 25;

if (age >= 21) {
    console.log("Youe are allowed to take pain-killers");
} else {
    console.log("Youe are not-allowed to take pain-killers");
}


const webdev = ["Onkar", "Aditya", "Paras", "Rishi", "Harshal", "Manish", "Amey"];
if (webdev.length <= 5) {
    console.log("You are allowed to attend the lectures");
} else {
    console.log("You are not-allowed to attend the lectures");
}