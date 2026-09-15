/*Ques 42:- Har number ke liye original number aur square generate karo.
const numbers=[1,2,3,4];

Requirements:
108. flatMap solution.
109. Expected output.
110. map alone ka output shape.
 */

// Code Solution
const numbers = [1, 2, 3, 4];

const result = numbers.flatMap(num => {
    let sqr = num * num;
    return [num, sqr];
});

console.log(result);

// Explanation
/* 
- map() method is one-to-one → each input element gives one output element.
- Sometimes we need one-to-many → one input element gives multiple outputs.
- In this case, for each number we want both the number itself and its square.
- flatMap() lets us return an array of results for each element (many values).
- Then it flattens those small arrays into one big array (by one level).
- So final output is: [1, 1, 2, 4, 3, 9, 4, 16]
- If we used map() alone, we would get nested arrays:
  [[1,1], [2,4], [3,9], [4,16]]
- flatMap() removes that extra nesting and gives a flat array.
*/
