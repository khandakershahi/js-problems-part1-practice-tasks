/**
 * ### Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 

sample-input: 
numbers = [5,6,11,12,98, 5]

find: 5

output: 2

<br/>

sample-input: 

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

const numbers = [5,6,11,12,98, 5, 11, 23, 11];

function duplicate(arr){
    const findValue = 11;
    let count = 0;
    for (const number of arr) {
        if(number === findValue){
            count++;
        }
    }
    return count;
}

const find = duplicate(numbers);
console.log(find);
