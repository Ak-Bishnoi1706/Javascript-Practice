/*QUES 14:- Index 1 se 4 tak selected portion extract karo.
const numbers = [10,20,30,40,50,60];

Requirements:
35. slice call likho.
36. Output batao.
37. End index inclusion explain karo. */

console.log("Slice method is used to extract a portion of an array without modifying the original array. \n- Returns a copy of a section of array. \n- The slice method takes two arguments: start index (If start is undefined, then the slice begins at index 0) and end index (exclusive).");

const numbers = [10, 20, 30, 40, 50, 60];
const newArr = numbers.slice(1, 4);

console.log("Original Array:- ", numbers);
console.log("Sliced Array:- ", newArr);