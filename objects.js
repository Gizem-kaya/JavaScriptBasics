
// Objects are references.

let x = { value: 10 }
let y = x;

x.value = 20;
console.log(y);     // y = 20 because we are not assigning 10 to y, we are assigning the reference of the x to y. So now y is a reference that points to x object.


/*********************************************************/


let circle = {
    radius: 2,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {  // If a function belongs an object so we call this function as method.
        console.log('draw');
    }
};

/*********************************************************/

// PATTERNS FOR CREATING OBJECTS


/*********************************************************/

// Factory Functions

function createCircleObjects(radius){
    return  {
        radius,  // In JavaScript it is the shortest way of writing radius: radius. So it is supposed to be like parameter and the property has the same name so we can shrink the code.
        isVisible: true,
        draw: function() {  // If a function belongs an object so we call this function as method.
            console.log('draw');
        },
        // We can write a smaller code to represent methods in objects.
        calculate(){
            console.log('calculated');
        }
    };
}


/*********************************************************/

// Constructor Functions

// We should use Pascal Notation while creating constructors. Pascal Notation : OneTwoThreeFour

// When we are using new keyword 3 thing happen:
    // JavaScript creates a new empty object like let x = {};
    // Assings this object to this keyword.
    // At last returns 'this' object when the constructor ends.

function Circle(radius){
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// Copy an object to another (Old method)

function copyObjectOld(originalObject){

    const copyObject = {};

    for(let pairs of Object.entries(originalObject)){
        copyObject[pairs[0]] = pairs[1];
    }
    return copyObject;
}

// Copy an combine objects (new method)
// Copies the second argument and pastes to the first argument. So the first argument is gonna expand. 

function copyObjectNew(originalObject){

    return Object.assign({ 'color': 'yellow'}, originalObject);
     
}

// Clonining an object to another has a method which is the best.

function cloneObjectEasily(originalObject){
    return { ...originalObject};    // spread operator is used for cloning objects. It brings all the stuffs in an object and by using {} we can create a new object.
}

// Data Objects

const now = new Date();
const date1 = new Date('April 21 2023 12:00');
const date2 = new Date(2023, 3, 21, 12);




