// if we don't define a variable, the value of the variable automatically asigned to "undefined".

let name; 

// We are using camel notation in JavaScript. 

// Constants
const jobName = 'Engineer';

console.log('This my first log on the console!');

/*********************************************************/

// var => function-scoped defined variable

function startVar(){
    for(var i = 0; i < 5; i++)
        console.log(i);

    console.log(i);
}

// console.log(i); // gives error because it is outside of the function scope.


// after ES6 (ES2015) let, const => block-scoped

function startLet(){
    for(let i = 0; i < 5; i++)
        console.log(i);

    // console.log(i); // gives error because it is outside of the block scope.
}


// If we write a global variable with var keyword outside of any function we need to deal with some stuffs.
// Lets assume we created a globl variable with var, so it is added to the window object of our program, 
// another 3rd party library have a variable with the same name and we are trying to change our variables value.
// In this case the program will override the variable in the library.