// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR ANSWER HERE */

let myArray = [1, 2, 3]
console.log(myArray.reverse());

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */

let highestNumber = myArray[0];

for (let i = 0; i < myArray.length; i++) {

    if (myArray[i] > highestNumber) {
        highestNumber = myArray[i]
    }
}
console.log('This is the highest number:', highestNumber)

// withM ath.max()
console.log(Math.max(...myArray));

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */

let lowestNumber = myArray[0];

for (let i = 0; i < myArray.length; i++) {

    if (myArray[i] < lowestNumber) {
        lowestNumber = myArray[i]
    }
}
console.log('This is the lowest number:', lowestNumber)

// withMath.min()
console.log(Math.min(...myArray));

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/
let newArray = [34, 12, 2, 13, 6, 8]

for (let i = 0; i < newArray.length; i++) {

    if (newArray[i] % 2 === 0) {
        console.log(newArray[i]);
    }
}

/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] % 2 === 1) {
            newArray.splice(j, 1)
        }
    }
}

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/


let vowelsArr = ['a', 'e', 'i', 'o', 'u']
let randomString = 'RrMZhIO5whbzlM7sixGt';
randomString = randomString.toLowerCase();
randomString = randomString.split('');

for (let i = 0; i < randomString.length; i++) {
    if (vowelsArr.includes(randomString[i])) {
        randomString.splice(i, 1)
    }

}
console.log(randomString.join(''));



/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */
let numericalArray = [34, 89, 45]

for (let i = 0; i < numericalArray.length; i++) {
    numericalArray[i] += 1;

}
console.log(numericalArray);




/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */

let arrOfWords = ["strive", "is", "great"];

for (let i = 0; i < arrOfWords.length; i++) {
    arrOfWords.splice(i, 1, arrOfWords[i].length)
}

console.log(arrOfWords);