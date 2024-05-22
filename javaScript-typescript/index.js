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

