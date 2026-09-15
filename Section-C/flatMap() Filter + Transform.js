/* Ques 43:- Even numbers ko double karo aur odd numbers remove karo.
const numbers=[1,2,3,4,5,6];

Requirements:
111. flatMap solution.
112. Output.
113. Empty array return ka role.
*/

// Code Solution:- 1 
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(num => num % 2 === 0)   // Step 1: filter → keeps only even numbers [2,4,6]
  .flatMap(num => num * 2);       // Step 2: flatMap → doubles each even number → [4,8,12]

console.log(result); // Output: [4,8,12]

// Code Solution:- 2
const result2 = numbers.flatMap(num => {
  if(num % 2 === 0) return [num*2]; // Even numbers → return array with doubled value
  else return [];                   // Odd numbers → return empty array, so they vanish
});
console.log(result2); // Output: [4,8,12]

// Explanation
/*
- filter() is used in Solution 1 to remove odd numbers first.
- flatMap() then takes the even numbers and doubles them.
- In Solution 2, flatMap() alone handles both steps:
   → If number is even, return [num*2].
   → If number is odd, return [] (empty array).
- Returning [] means that element is completely removed from the final result.
- Final output in both cases: [4,8,12]
*/
