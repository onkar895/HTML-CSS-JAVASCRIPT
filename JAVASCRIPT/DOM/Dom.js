// 1. getElementById(): 
// This method is used when developers have defined certain HTML elements with IDs that uniquely identify the same elements in the whole document.
//  It returns an Element object which matches the specified ID in the method. If the ID does not exist in the document, it simply returns null.

let Name = document.getElementById('myName');
console.log(Name);

let DisplayName = Name.innerText;
console.log(DisplayName);

// To change the value of an HTML attribute, use this syntax:
// document.getElementById(id).attribute = new value
// document.getElementById("myImage").src = "landscape.jpg";

// 2. getElementsByClassName(): 
// This method is used when there are multiple HTML elements with the same class name. 
// It returns a collection of all objects which match the specified class in the method.

let fullname = document.getElementsByClassName('FullName');
console.log(fullname);
console.log(fullname[0].innerText);

// 3. innerHtml : 
// The innerHTML property is useful for getting or replacing the content of HTML elements.
// The innerHTML property can be used to get or change any HTML element, including <html> and <body>.

let UpdateName = document.getElementById('myName').innerHTML = "OMKAR KARALE";
console.log(UpdateName);

// 4. getElementsByName(): 
// In Javascript, getElementsByName() returns a NodeList of objects which match a particular name attribute in the HTML document.

const inputs = document.getElementsByName("geek");
console.log(inputs);
console.log(inputs[1]);

// 5. getElementsByTagName(): 
// The getElementsByTagName() returns a HTML Collection of objects which match a tag name in the HTML document.

const p = document.getElementsByTagName("p");
console.log(p);
console.log(p[2].innerText);

// 6. querySelector(): 
// This method returns the first match of an element that is found within the HTML document with the specific selector. If there is no match, null is returned.

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


// 7. querySelectorAll():
// This method finds all of the elements that match the CSS selector and returns a list of all of those nodes.

const listItems = document.querySelectorAll("ul > li");
console.log(listItems);
console.log(listItems[2].innerText);



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