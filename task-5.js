/**
 * ### Task-5: Generate a random number between 10 to 20.
 */

function randomNumber(){
    return Math.floor((Math.random() * 10) + 10);
}


const result = randomNumber();
console.log(result);