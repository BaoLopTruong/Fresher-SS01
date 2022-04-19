// camel case for variables and function
let firstIndex = 0;
// // don't do that
let SecondIndex = 1;


function getFirstIndex() {
    return firstIndex;
}


// using Pascal Case for class name
class Item {};
// file have the same name with mainClass
"Item.js", 
"globalNetwork.js"



// using Upper Case for constants value
const MAX_STEP = 1000;
// always using ";" after statement
const EVENT_HIDE = 'event-hide';



// open bracket "{" in the same line 
function doThis() {
    // ...
}

//// that is for "C", "C++", "C#" 
function dontDoThatInJS() 
{
    // ...
}

// you won't know what is wrong here
function getUser(id) {
    return // undefined
    {
        userName: "user166"
    };
}

// should using const for object, array 
let car = { type: "Fiat", model: "500", color: "white" };
const cars = ["Volvo", "Saab", "Fiat"];


// let 's initialize variables when you declare them
let firstName = "",
    price = 0;
const myArray = [];
const myObject = {};


// be careful with types in javascript
let x = 5 + 7; // 12
x = 5 + "7"; // 57
x = "5" + 7; // 57
x = 5 - 7;  // -2
x = 5 - "7"; // -2
x = "5" - 7; // -2
x = 5 - "x"; // NaN
x = null - 15; // -15
x = 15 - null; // -15
x = undefined - 15; // -NaN
x = 15 - undefined; // -NaN


// and more careful with the comparison or condition
let theCondition;
if (theCondition) { } // anything always be converted to boolean
(15 === null); // false
(15 === null + 15); // true


x = 10;
switch (x) {
    case "10": console.log("Hello"); // don'y log anything
    case 10: alert("Hello"); // it works
}

// and careful with += 
x = 10 + 5; // 15
let y = 10;
y += "5";  // 105;


// careful with js float
x = 0.1 + 0.2;
(x === 0.3) // false


// and also, you need to careful with ";"
x = 0;
if (x === 10); {
    console.log('x === 10'); // it run now
}