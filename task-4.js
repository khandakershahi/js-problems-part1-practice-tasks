/**
 * ### Task-4: Write a function to find the longest word in a given string.

sample-input: 
I am learning Programming to become a programmer

sample-output: Programming
 */

const sentense = 'I am learning Programming to become a programmer';
const sentenseArray = sentense.split(' ');

function findLongestWord(sentenseArray){
    
    let longestWord = '';
    for (let word of sentenseArray) {
        if(longestWord.length < word.length){
            longestWord = word;
            word++;
        }
    }
    return longestWord;
}


const result = findLongestWord(sentenseArray);
console.log(result);