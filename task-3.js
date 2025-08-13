/**
 * ### Task-3: Write a function to count the number of vowels in a string.
 */

const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str){
    let count = 0;
    for (const element of str) {
        if(vowels.includes(element.toLowerCase()) ){
            count++;
        }
    }
    return count;
}

const result = countVowels('Banana');
console.log(result);