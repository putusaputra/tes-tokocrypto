var past = 0;
var current = 1;
var fibonacci = past + current;

function getPrimeFibonacci(limit) {
var fiboList = [];
var primeFiboList = [];
var primeFiboSum = 0;
var primeFiboCount = 0;

fiboList.push(0);
fiboList.push(1);

    for(var i = 0; i < (limit - 2); i++) {
        fibonacci = current + past;
        past = current;
        current = fibonacci;

        if (checkPrime(fibonacci)) {
            primeFiboSum += fibonacci;
            primeFiboCount++;
            primeFiboList.push(fibonacci);
        }
        fiboList.push(fibonacci);
    }

    console.log('non prime fibonacci list : ' + fiboList);
    console.log('prime fibonacci list : ' + primeFiboList);
    console.log('prime fibonacci count : ' + primeFiboCount);
    return primeFiboSum;
}

function checkPrime(numbers) {
var isPrime = false;
var count = 0;
    for (var i = 1; i <= numbers; i++) {
        if (numbers % i == 0) {
            count++;
        }

        if (count == 2) {
            isPrime = true;
        }
        else {
            isPrime = false;
        }
    }

    return isPrime;
}

console.log('prime fibonacci sum : ' + getPrimeFibonacci(20));