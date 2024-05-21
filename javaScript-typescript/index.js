// ##basic javascript problems

// Problem 1 : Print all even numbers from 0 – 10

for (let i=0; i<10; i++){
    if(i%2 ===0){
        console.log(i);
    }
}

// Problem 2 : Print a table containing multiplication tables

console.log('multiplication of tables:');

for (let i=0; i<=10; i++){
    for (let j=0; j<=10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
    console.log(); // Add a line space after every table ends
}