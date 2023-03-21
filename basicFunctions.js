function findMax(firstNumber, secondNumber){
    return firstNumber > secondNumber ? firstNumber : secondNumber;
}

function fizzBuzz(number){

    if (typeof number !== Number)
        return 'Not a number';

    if(number % 15 == 0)
        return 'FizzBuzz';
    else if(number % 5 == 0)
        return 'Buzz';
    else if(number % 3 == 0)
        return 'Fizz';
    else 
        return number;
}

function checkSpeed(speed){
    let points = 0;
    if(speed < 75)
        return 'Ok';
    else {
        points =  Math.floor((speed - 70)/5);
    }

    return points < 12 ? points : 'License suspended';
}


function primeNumbers(limit){

    for(let number = 2; number <= limit; number++){
        let isPrime = true;

        for(let factor = 2; factor < number; factor++){
            if(number % factor === 0){
                isPrime = false;
            }
        }

        if(isPrime) console.log(number);
    }


}