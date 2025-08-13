/**
 * ### Task-1: Write a function to convert temperature from Celsius to Fahrenheit.
 * °F = (°C × 1.8) + 32.
 */


function fahrenheit(celsius){
    return ((celsius * 1.8) + 32);
}

const Fahrenheit = fahrenheit(40);
console.log('Fahrenheit is ',Fahrenheit);