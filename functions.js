
// If you are using arguments in a function you don't need to write parameters.

function sum(){
    let sum = 0;
    for(let number of arguments)
        sum += number;
    
    return sum;
}

console.log(sum(1,2,3,4,5));   // Output: 15


// Rest operator gather the rest of the arguments from a function call and give them to a function as function parameters.

function restSum(discount, ...prices){
    let total = prices.reduce((accumulator, initial) => accumulator + initial);
    return total*(1-discount);
}

console.log(restSum(0.1,20,30));

// Default parameters.

function printThese(a, b, c = 5, d = 6){
    console.log(a,b,c,d);
}

printThese(1, 2); // 1 2 5 6



// Getters and Setters

const nameObject = {
    firstName: 'Gizem',
    lastName: 'Keskin',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

console.log(nameObject.fullName);
nameObject.fullName = 'Gizem Kaya';
console.log(nameObject.fullName);


// Defensive Programming
// Try Catch

const nameObjectTryCatch = {
    firstName: 'Gizem',
    lastName: 'Keskin',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){

        if(typeof value !== 'string')
            throw new Error('The input is not a string!');

        const names = value.split(' ');

        if(names.length !== 2)
            throw new Error('The input cannot be empty!');

        
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

try{
    nameObjectTryCatch.fullName = 'g k';
    console.log(nameObjectTryCatch.fullName);
} catch (e) {
    alert(e);
}




