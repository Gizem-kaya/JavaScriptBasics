
// if we don't define a variable, the value of the variable automatically asigned to "undefined".

let name; 

// We are using camel notation in JavaScript. 

// Constants
const jobName = 'Engineer';

console.log('This my first log on the console!');

/*********************************************************/

// Primitive types

//Primitives copied by their value.

let yourName = 'Gizem';     // String. String is a primitive type and there is a string type that belongs objects.
let yourAge = 28;           // Number (All numbers can be declared with number :))
let isApproved = false;     // Boolean
let firsName = undefined;   // undefined (It is a type and also a value.)
let lastName = null;        // null (Type of it is object.)

/*********************************************************/

// Reference Types (Object, Array, Function)

// Objects copied by their reference.

let animal = {
    name: 'Eru',
    age: 8
};

console.log(animal);

// We can access the properties of any object by using dot notation.

animal.name = 'EruChanged';
animal.age = 9;

// We can access the properties of any object by using bracket notation.

let selection = 'name';
console.log(animal[selection]); // We can change the property that we want to use in run time.
console.log(animal['age']);

/*********************************************************/

// JavaScript is a dynamic programming language that means
// we can change variables types in runtime.
// Python, Ruby, JavaScript are the most famous dynamic programming languages.

// Static Programming languages you need to handle your memory
// allocation yourself. Like Java, C, C++, C#.

// Dynamic programming languages can be more flexible and faster to develop with, 
// while static programming languages can offer better performance and more reliable type checking.

// If we go to the browser and change types of the variables from console at runtime,
// we can see that variables change their types! Which is a magical thing that 
// we can only encounter in dynamic programming language.

/*********************************************************/

// ARRAYS

// Arrays are objects in JavaScript.
// we can store different types of variables in arrays.

let selectedColors = ['red', 'blue'];
selectedColors[2] = 89;

console.log(selectedColors);

/*********************************************************/

// FUNCTIONS

// Parameters are local variables written in the function declaration and 
// the arguments are the actual values of the parameters.

function sayHi(name /*parameter*/){
    console.log('Hi ' + name);
}

sayHi('Gizem' /*Argument*/);

// If we have 2 parameters in function declaration and we don't pass any argument to this function, 
// it automatically pass undefined object to the function and does not gice any error.

/*********************************************************/

// Strict equality check (Type + Value) 

console.log(1 === 1);   // true
console.log('1' === 1); // false

// Lose equality check (Value) It automatically converts the second operand to the same time of first operand.

console.log(1 == 1);    // true
console.log('1' == 1);  // true 
console.log(true == 1); // true

// Most of the time we should use strict equality operator since its more precise and accurate.

/*********************************************************/

// Ternary Operator

let point = 59;
let type = point > 100 ? 'gold' : 'silver';

/*********************************************************/

// Logical Operations

// The result of the logical operations is not nesseceraly a boolean.

console.log(false || 'Gizem'); // Gizem

// Falsy in JavaScript (kinda like boolean false)
//  - undefined
//  - null
//  - 0
//  - false
//  - ''
//  - NaN

// Anything else that is not Falsy means it is Truthy.

console.log(false || 1 || 2); // 1

// As soon as we find and operand that is a truthy that operand is returned.
// We called it Short Circuit.

/*********************************************************/

// Bitwise Operators

// | OR
// & AND


/*********************************************************/

// For..in Loops

for(let property in animal){
    console.log(property + " " + animal[property]);
}


/*********************************************************/

// From ES6 we have a new way of iterating over loop. 
// For..of deals with the loops without including indices of the elements. 
// It directly invokes elements from objects.
// It is usable for arrays and maps. Not for the objects.

for (let index of selectedColors){
    console.log(index);
}


/*********************************************************/

// This concludes the for..in and for..of loops : 
// We should use for..in loops for calling properties in an object and 
// for..of for iterating over in an array.


console.log('Max of two numbers:', findMax(1,2));
console.log('FizzBuzz:', fizzBuzz('a'));
console.log('Speed check:', checkSpeed(70));
primeNumbers(10);

circle.draw();
let factoryCircle = createCircleObjects(5);
factoryCircle.calculate();

/*********************************************************/

// We created a Circle object with const keyword. However we still can change the content that it has. 
// Const keyword stands for only the assignments. 
// That means we canonot reassign this object for example we cannot assign this object to a empty object.
const constructorCircle = new Circle(2);
constructorCircle.calculate = function(){
    console.log('calculated');
}

if('radius' in constructorCircle) console.log('yes'); // We can check if the key is present in an object.


/*********************************************************/

Object.keys(constructorCircle); // Returns the keys array in the object.
Object.entries(constructorCircle); // Return the key, value pairs in the object.


/*********************************************************/

console.log(copyObjectOld(constructorCircle)); // {radius: 2, draw: ƒ, calculate: ƒ}
console.log(copyObjectNew(constructorCircle)); // {color: 'yellow', radius: 2, draw: ƒ, calculate: ƒ}


/*********************************************************/

// Template Literals

// They are used by writing string as is shown on the browser or output.

const nameOfPerson = "Gizem";

const templateLiteral = `Hey this 
is ${nameOfPerson}'s "template literal". `

console.log(templateLiteral);

// This literal is equal with below.

const stringLiteral = 'Hey this \nis ' + nameOfPerson + '\'s \"template literal\". '
console.log(stringLiteral);

// The outputs are the same.
/**
 * Hey this 
 * is Gizem's "template literal".
 */