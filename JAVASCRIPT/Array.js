// Storing the color names one by one in a variable

var color1 = "Red";
var color2 = "Green";
var color3 = "Blue";
console.log(color1, color2, color3);


// Creating an Array:

// Syntax:  var myArray = [element0, element1, ..., elementN];

var colors = ["Red", "Green", "Blue"];
console.log(colors);
console.log(colors[2]);
console.log(colors.length - 1);

// You can use 'for' loop to access each element of an array in sequential order, like this:
console.log("Using Normal for loop");
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Print array element
}


// ECMAScript 6 has introduced a simpler way to iterate over array element, which is 'for-of loop'. 
// In this loop you don't have to initialize and keep track of the loop counter variable (i).
console.log("Using ES6 for of loop");
for (var fruit of fruits) {
    console.log(fruit); // Print array element
}


// You can also iterate over the array elements using 'for-in loop', like this:
console.log("Using ES6 for in loop");
for (var i in fruits) {
    console.log(fruits[i]); // Print array element
}


// Array Methods: 

// 1. Push(): 
// To add a new element at the end of an array, simply use the push() method

let Rcolors = ["Red", "Green", "Blue"];
Rcolors.push("Yellow");

console.log(Rcolors); // Prints: Red,Green,Blue,Yellow
console.log(Rcolors.length); // Prints: 4


// 2. unshift(): 
// To add a new element at the beginning of an array use the unshift() method.

Rcolors.unshift("White");
console.log(Rcolors);
console.log(Rcolors.length);


// 3. pop():
// To remove the last element from an array you can use the pop() method. This method returns the value that was popped out.

let last = Rcolors.pop();
console.log("Removed color:" + last);
console.log(Rcolors);


// 4. shift(): 
// To delete a element at the beginning of an array use the shift() method.

let first = Rcolors.shift();
console.log("Removed color:" + first);
console.log(Rcolors);


// 5. splice():
// The splice() method is a very versatile array method that allows you to add or remove elements from any index.
// using the syntax arr.splice(startIndex, deleteCount, elem1, ..., elemN).

let removed = Rcolors.splice(0, 1);
console.log("Removed color at position 1:" + removed); //removed the 1st element
console.log(Rcolors);

inserted = Rcolors.splice(1, 0, "Pink", "Yellow"); // Insert two items at position one
console.log("Inserted colors at position 1:" + inserted);
console.log(Rcolors);

let Ins_rem = Rcolors.splice(1, 1, "Purple", "Voilet"); // Insert two values, remove one
console.log("Removed element 1 and Inserted colors at element 1:" + Ins_rem);
console.log(Rcolors);


// 6. Extracting a Portion of an Array using slice():
// If you want to extract out a portion of an array (i.e. subarray) but keep the original array intact you can use the slice() method. 
// This method takes 2 parameters: start index , and an optional end index like arr.slice(startIndex, endIndex)

var myfruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
var subarr = myfruits.slice(1, 3);
console.log(subarr); // Prints: Banana,Mango


// Creating a String from an Array:

// 7. join():
// To do this you can use the join() method. This method takes an optional parameter which is a separator string that is added in between each element. 
// If you omit the separator, then JavaScript will use comma (,) by default.

var cities = ["London", "Paris", "New York"];

console.log(cities.join());
console.log(cities.join(""));
console.log(cities.join("-"));
console.log(cities.join(", "));


// 8. concat():
// Merging Two or More Arrays
// The concat() method can be used to merge or combine two or more arrays. 
// This method does not change the existing arrays, instead it returns a new array.

var pets = ["Cat", "Dog", "Parrot"];
var wilds = ["Tiger", "Wolf", "Zebra"];
var bugs = ["Ant", "Bee"];
// Creating new array by combining pets and wilds arrays
var animals = pets.concat(wilds, bugs);
console.log(animals); // Prints: Cat,Dog,Parrot,Tiger,Wolf,Zebra


// 9. indexof();
// Searching Through an Array
// If you want to search an array for a specific value, you can simply use the indexOf() and lastIndexOf(). 
//If the value is found, both methods return an index representing the array element. If the value is not found, -1 is returned. 
// The indexOf() method returns the first one found, whereas the lastIndexOf() returns the last one found.

var Fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];

console.log(Fruits.indexOf("Apple")); // Prints: 0
console.log(Fruits.indexOf("Banana")); // Prints: 1
console.log(Fruits.indexOf("Pineapple")); // Prints: -1


var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];

// Searching forwards, starting at from- index
console.log(arr.indexOf(1, 2)); // Prints: 3

// Searching backwards, starting at from index
console.log(arr.lastIndexOf(1, 3)); // Prints: 3


// 10. find():
// If you want to search an array based on certain condition then you can use the JavaScript find() method which is newly introduced in ES6. 
//This method returns the value of the first element in the array that satisfies the provided testing function. Otherwise it return undefined.

var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];

var result = arr.find(function(element) {
    return element > 4;
    // return element < 4;   prints 3
});
console.log(result); // Prints: 5


// 11. findIndex():
// There is one more method similar to find() is findIndex() method, which returns the index of a found element in the array instead of its value. 

var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];

var result = arr.findIndex(function(element) {
    return element > 6;
});
console.log(result); // Prints: 8


// 12. filter():
// If you want to find out all the matched elements you can use the filter() method.
// The filter() method creates a new array with all the elements that successfully passes the given test.

var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];

var result = arr.filter(function(element) {
    return element > 4;
    // return element < 4;    prints less than 4 elements from the array
});
console.log(result); // Prints: 5,7
console.log(result.length); // Prints: 2


// 13. sort():  Sorting an array
// The JavaScript Array object has a built-in method sort() for sorting array elements in alphabetical order.
// The sort() method sorts the numeric array elements by converting them to strings  ot numbers.

var fruits = ["Banana", "Orange", "Apple", "Papaya", "Mango"];
var sorted = fruits.sort();

console.log(fruits); // Outputs: Apple,Banana,Mango,Orange,Papaya
console.log(sorted); // Outputs: Apple,Banana,Mango,Orange,Papaya


// 14. compare function:
// The sort() method sorts the numeric array elements by converting them to strings.
// To fix this sorting problem with numeric array, you can pass a compare function.

// When compare function is specified, array elements are sorted according to the return value of the compare function. For example, when comparing a and b:

// 1. If the compare function returns a value less than 0, then 'a' comes first.
// 2. f the compare function returns a value greater than 0, then 'b' comes first.
// 3. If the compare function returns 0, a and b remain unchanged with respect to each other, but sorted with respect to all other elements.

var numbers = [5, 20, 10, 75, 50, 100];
// here a=5 and b=20 and so on from another elements also
// Sorting an array using compare function
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers); // Outputs: 5,10,20,50,75,100

// Hence, since 5 - 20 = -15 which is less than 0, therefore 5 comes first, similarly 20 - 10 = 10 which is greater than 0, therefore 10 comes before 20, 
// likewise 20 - 75 = -55 which is less than 0, so 20 comes before 75, similarly 50 comes before 75, and so on.


// 14. reverse(): 
// You can use the reverse() method to reverse the order of the elements of an array.

var counts = ["one", "two", "three", "four", "five"];
var reversed = counts.reverse();

console.log(counts); // Outputs: five,four,three,two,one
console.log(reversed); // Output: five,four,three,two,one


// 15. map():
// The Array.map() method allows you to iterate over an array and modify its elements using a callback function. 
// The callback function will then be executed on each of the array's elements.
// Now imagine you are required to multiply each of the array's elements by 3. You might consider using a for loop.
// But you can actually use the Array.map() method to achieve the same result.

// Example 1:
let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element) { // The code iterates over the array arr and applies a function to each element.
    return element * 3;
});

console.log(modifiedArr); // [9, 12, 15, 18]

// The Array.map() method is commonly used to apply some changes to the elements, whether multiplying by a specific number as in the code above, 
// or doing any other operations that you might require for your application.


// Example 2: Array of objects
let users = [
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Daniel", lastName: "Longbottom" },
    { firstName: "Jacob", lastName: "Black" }
];

let userFullnames = users.map(function(element) {
    return `${element.firstName} ${element.lastName}`;
})

console.log(userFullnames);
// ["Susan Steward", "Daniel Longbottom", "Jacob Black"]