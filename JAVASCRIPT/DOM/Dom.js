// 1. getElementById(): 
// This method is used when developers have defined certain HTML elements with IDs that uniquely identify the same elements in the whole document.
//  It returns an Element object which matches the specified ID in the method. If the ID does not exist in the document, it simply returns null.

console.log("Logging using getElementById:");
let Name = document.getElementById('myName');
document.write(Name);
Name.style.backgroundColor = "lightblue";

let DisplayName = Name.innerText;
console.log(DisplayName);

// To change the value of an HTML attribute, use this syntax:
// document.getElementById(id).attribute = new value
// document.getElementById("myImage").src = "landscape.jpg";

// 2. getElementsByClassName(): 
// This method is used when there are multiple HTML elements with the same class name. 
// It returns a collection of all objects which match the specified class in the method.

console.log("Logging using getElementByClassName:");
let fullname = document.getElementsByClassName('FullName');
console.log(fullname);
console.log(fullname[0].innerText);

// 3. innerHtml : 
// The innerHTML property is useful for getting or replacing the content of HTML elements.
// The innerHTML property can be used to get or change any HTML element, including <html> and <body>.

console.log("Logging the inner text using innerHTML:");
let UpdateName = document.getElementById('myName').innerHTML = "OMKAR KARALE";
console.log(UpdateName);

// 4. getElementsByName(): 
// In Javascript, getElementsByName() returns a NodeList of objects which match a particular name attribute in the HTML document.

console.log("Logging using getElementByName:");
const inputs = document.getElementsByName("geek");
console.log(inputs);
console.log(inputs[1]);

// 5. getElementsByTagName(): 
// The getElementsByTagName() returns a HTML Collection of objects which match a tag name in the HTML document.

console.log("Logging using getElementByTagName:");
const p = document.getElementsByTagName("p");
console.log(p);
console.log(p[2].innerText);

// 6. querySelector(): 
// This method returns the first match of an element that is found within the HTML document with the specific selector. If there is no match, null is returned.

console.log("Logging using querySelector:");
const h1Element = document.querySelector("#Para");
// console.log(h1Element);
// console.log(h1Element.innerText);

const pElement = document.querySelector("#Para1");
// console.log(pElement);
// console.log(pElement.innerText);

const list = document.querySelector(".list");
// console.log(list);
// console.log(list.innerText);

console.log(h1Element.innerText, pElement.innerText, list.innerText);

h1Element.innerText += " and Channels"; // here '+=' join the first element's content to the second element's content
console.log(h1Element.innerText);


// 7. querySelectorAll():
// This method finds all of the elements that match the CSS selector and returns a list of all of those nodes.

console.log("Logging using querySelectorAll:");
const listItems = document.querySelectorAll("ul > li");
console.log(listItems);
console.log(listItems[2].innerText);

console.log("Logging using foreach");
listItems.forEach(list => {
    console.log(list);
})

console.log("Logging using foreach innertext");
listItems.forEach(list => { //The code will loop through the list items and print out each item's innerText value.
    console.log(list.innerText); //  logging each item's innerText. 
    list.innerText += " Adding new text"; // The code is also adding a new text to each item in the list.
    console.log(list.innerText);
})



//   Getting and adding attributes to the html elements

// 1. getAttribute(): 
//The getAttribute() method is used to get the current value of a attribute on the element.
// If the specified attribute does not exist on the element, it will return null.

// Selecting the element by ID attribute
var link = document.getElementById("myLink");

// Getting the attributes values
var href = link.getAttribute("href");
console.log(href); // Outputs: https://www.google.com/

var target = link.getAttribute("target");
console.log(target); // Outputs: _blank


// 2. setAttribute():
// The setAttribute() method is used to set an attribute on the specified element.
// If the attribute already exists on the element, the value is updated; otherwise a new attribute is added with the specified name and value.

// 1st Example:
// Selecting the element
var btn = document.getElementById("myBtn");

// Setting new attributes
btn.setAttribute("class", "click-btn");
btn.setAttribute("disabled", "");

// 2nd Example:
// Selecting the element
var link = document.getElementById("myLink2");

// Changing the href attribute value.
link.setAttribute("href", "https://www.tutorialrepublic.com");


// 3. removeAttribute():
// The removeAttribute() method is used to remove an attribute from the specified element.

// Selecting the element
var link = document.getElementById("myLink3");

// Removing the href attribute
link.removeAttribute("href");



// How to Add New Elements to the Document:

//  1. createElement():

// Right now, I just have an <h1> tag on the page. But I want to add a list of reasons why I love my mom below that <h1> tag using JavaScript.
// We can first create an <ul> element using document.createElement(). I will assign that to a variable called unorderedList.

let unorderedList = document.createElement("ul");

// Creating a text node 
var newContent = document.createTextNode("Hi, how are you doing?");
// appendChild():
unorderedList.appendChild(newContent)

//Then we need to add that <ul> element to the document using the appendChild() method.

// 2. appendChild(): 
// Add an HTML element to the document. It is used for creating a new element with some text then first create the text as the text node and 
// then append it to the element,  then append the element to the document.
document.body.appendChild(unorderedList);

let listItem1 = document.createElement("li");
listItem1.textContent = "It's free";
// textcontent is used to add some text in the html element.
unorderedList.appendChild(listItem1);

let listItem2 = document.createElement("li");
listItem2.textContent = "It's awesome";
// textcontent is used to add some text in the html element.
unorderedList.appendChild(listItem2);

// 3. replaceChild(new,old): 
// Replace an HTML element from the document. It is used to replace a child node with a new node within the given parent node.
let listItem3 = document.createElement("li");
listItem3.textContent = "It's fantastic";
unorderedList.replaceChild(listItem3, listItem2);

// 4. removeChild() :   Remove an HTML element to the document.
unorderedList.removeChild(unorderedList.firstElementChild);



// Javascript Events:
// Javascript has events to provide a dynamic interface to a webpage. 
// These events are hooked to elements in the Document Object Model(DOM).
// A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.
// We can bind events either as inline or in an external script.

// 1. onclick event: 
// This is a mouse event and provokes any logic defined if the user clicks on the element it is bound to.

function hiThere() {
    alert('Hi there!');
}


// 2. ondblclick event: 
// This is a mouse event and provokes any logic defined if the user double clicks on the element it is bound to.

function hey() {
    alert('Hey you have clicked me twice');
}


// 3. onmouseover event: 
// This event corresponds to hovering the mouse pointer over the element and its children, to which it is bound to.

function hov() {
    var e = document.getElementById('hover');
    e.style.backgroundColor = 'red';
}


// 4. onmouseout event: 
// Whenever the mouse cursor leaves the element which handles a mouseout event, a function associated with it is executed. 

function out() {
    var e = document.getElementById('hover');
    e.style.backgroundColor = 'yellow';
}


// 5. onchange or onfocus event :
// The onchange and onblur event occurs when an HTML element loses focus.
// The onchange and onfocus event is often used on input fields.

function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}


// 6. onfocus event:
//  The onchange event is used when it gets focus.

function myFunction(x) {
    x.style.background = "lightblue";
}


// 7. onmouseenter and onmouseleave 
// The onmouseenter event occurs when the mouse pointer enters an element.
// The onmouseenter event occurs when the mouse pointer leaves an element.

function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}

function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}


// Event Listener:
// Events are actions that happen when the user or browser manipulates a page.
// An event listener in JavaScript is a way that you can wait for user interaction like a click or keypress and then run some code whenever that action happens. 

// 1. The addEventListener(): 
// 1. This method attaches an event handler to the specified element.
// 2. The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
// 3. You can add many event handlers to one element.
// 4. You can add many event handlers of the same type to one element, i.e two "click" events.

// Example 1:
document.getElementById("btn").addEventListener("click", fun);

function fun() {
    document.getElementById("para").innerHTML = "Hello World" + "<br>" + "Welcome to the  Concept";
}


// Example 2:

let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListener('click', () => {
    msg.classList.toggle('reveal');
})


// Example 3:
// This is an example of adding multiple events of different type to the same element.

var mybtn = document.getElementById("btn1");
mybtn.addEventListener("mouseover", fun1);
mybtn.addEventListener("click", fun2);
mybtn.addEventListener("mouseout", fun3);

function fun1() {
    btn1.style.width = "150px";
    btn1.style.height = "50px";
    btn1.style.background = "yellow";
    btn1.style.color = "blue";
}

function fun2() {

    btn1.style.background = "red";

}

function fun3() {
    document.getElementById("para").innerHTML = "This is second function";

}


// 2. removeEventListener() :

// The removeEventListener() method removes an event handler from an element that was previously added 
// using the addEventListener() function from the element.

const a = document.getElementById("hovereffect");
a.addEventListener("mouseover", MouseOverEffect);

function MouseOverEffect() {
    document.getElementById("effect").innerHTML +=
        "mouseover Event happened because you hovered !!" + "<br>";
}

function RemoveAfterClick() {
    a.removeEventListener("mouseover", MouseOverEffect);
    document.getElementById("effect").innerHTML +=
        'You just hit the "click me" button' + "<br>" +
        "Now, the mouseover event is disabled. !!";
}