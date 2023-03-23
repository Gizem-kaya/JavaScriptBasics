// Array of objects initialization.

const courses = [
    {id: 1, name:'a'},
    {id: 2, name:'b'}
]

// find the first object its name is a.

// To use find function we need to use a callback/predicate function as well.

const course = courses.find(function(course){
        return course.name === 'a';
    }
);

console.log(`Outcome of the callback function ${course.id}, ${course.name}`);
// Outcome of the callback function 1, a

// If we want to find the index ofthe element by using references we should use findIndex.

// indexOf for finding primitive types, findIndex is for non-primitive types in arrays.

// In ES6 there is a shorter and cleaner way of using callback functions. By deleting function keyword and adding arrow sign.

const courseES6 = courses.find((course) => {
    return course.name === 'a';
}
);

// More shortcuts below.

const courseES6_1 = courses.find(course => {        // Remove paranthesis since you have one parameter.
    return course.name === 'a';
}
);

const courseES6_2 = courses.find(course => course.name === 'a');        // Remove return keyword and curly braces. Cause you have one line and it is a return statement.




/*********************************************************/

// Combining arrays

const firstArray = [1,2,3];
const secondArray = [4,5,6];

const combinedArray = [...firstArray, 'a', ...secondArray];  // [1,2,3,'a',4,5,6]


// Copy of an array

const copy1 = firstArray.slice();

const copy2 = [...firstArray];

// Array iteration

for(let element of firstArray){
    console.log(element);
}

firstArray.forEach(function(element, index){
    console.log(index, element);
});

firstArray.forEach(element => console.log(element));

// every function keeps doing its job until it finds an element doesn't fit the statement. So it checks every element that matches the criteria.

firstArray.every(function(value){
    return value >= 0;
});

// some fuction stops when it finds any element that fits the statement. It checks at least one elements matches the criteria.

firstArray.some((value) => {
    return value === 1;
});

// Reduce function

const numbers = [1, 2, 3, 4, 5];
const reduceSum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(reduceSum); // Output: 15