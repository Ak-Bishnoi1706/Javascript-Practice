/*QUES 44:- Same one-to-many transformation ko dono approaches se solve karo.
const numbers=[1,2,3];

Requirements:- 
114. map().flat() code.
115. flatMap() code.
116. compare. */

const numbers = [1, 2, 3];

// Method 1:- map().flat() >
// Step 1: map() → for each number return [num, num*2]
// Result after map: [[1,2], [2,4], [3,6]] (nested arrays)
// Step 2: flat() → flattens one level of nesting
// Final result: [1,2,2,4,3,6]
const result1 = numbers.map(num => [num, num * 2]).flat();
console.log("Map().Flat() Result:- ", result1);

// Method 2:- flatMap() >
// flatMap() = map() + flat(1) combined in one step
// Each number returns [num, num*2], and flatMap flattens automatically
// Final result: [1,2,2,4,3,6]
const result2 = numbers.flatMap(x => [x, x * 2]);
console.log("FlatMap() Result:- ", result2);

// Comparison
// map().flat() → two-step process: first mapping, then flattening
// flatMap() → single-step process: mapping + flattening together
// Both give the same output, but flatMap is shorter and cleaner
console.log("The first method :- map().flat() is a two-step process where we first map each number to an array of itself and its double, and then flatten the resulting array. /n-The second method :- flatMap() combines both mapping and flattening into a single step, making it more concise and efficient for one-to-many transformations.");