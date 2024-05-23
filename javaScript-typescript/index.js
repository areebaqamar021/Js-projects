// ##basic javascript problems

// Problem 1 : Print all even numbers from 0 – 10

for (let i=0; i<10; i++){
    if(i%2 ===0){
        console.log(i);
    }
}

// Problem 2 : Print a table containing multiplication tables

console.log('Multiplication of tables:');

for (let i=1; i<=10; i++){
    for (let j=1; j<=10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
    console.log("  "); // Add a line space after every table ends
}

// Problem 3 : Create a length converter 

function convertLength(kilometer){
    const miles = kilometer * 0.784376;
    return miles;
}
console.log(convertLength(7));

// Problem 4 : Create a temperature converter

function convertTemperature(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log(convertTemperature(37));

function convertTemperature(fahrenheit){
    const celsius = (fahrenheit - 32) * 5.0 / 9.0;
    return celsius;
}
console.log(convertTemperature(100));

// Problem 5 : Calculate the sum of numbers within an array

const numbers = [5, 8, 9, 4, 3, 7];
let sum = 0;

for (let i=0; i<numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);

// Problem 6 : Create a function that reverses an array

const num = [4, 3, 7, 9, 2];
function reverseArray(arr){
    arr.reverse();
    return arr;
}
console.log(reverseArray(num));

// Problem 7 : Sort an array from lowest to highest

function sortArray(arr){
    arr.sort();
    return arr;
}
console.log(sortArray(num));

// Problem 8 : Create a function that filters out negative numbers

const negNum = [-3, -9, 6, 8, -5, -2];
function filterNegative(arr){
    let result = arr.filter(num => num >= 0);
    return result;
}
console.log(filterNegative(negNum));

// Problem 9 : Remove the spaces found in a string

const str = 'Hello         World';
function removeSpaces(str){
    let result = str.replace(/\s/g, '');
    return result;
}
console.log(removeSpaces(str));

// Problem 10 :  Return a Boolean if a number is divisible by 10

function divisibleByTen(num){
    if(num % 10 === 0){
        return true;
    }
    return false;
}
console.log(divisibleByTen(57));

// Problem 11 : Return the number of vowels in a string

const str1 = 'Hello World';
function countVowels(str){
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels(str1));

// Problem 12 : Create a function that returns the factorial of a number

function factorial(num){
    let result = 1;
    for (let i=1; i<=num; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));