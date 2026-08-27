/*QUES 16:- Array ke last two elements slice() se nikalo.
const users = ['Ali','Sara','John','Emma','Zara'];

Requirements:
42. Negative syntax use karo.
43. Output explain karo.
 */

// Using SLICE with negative indices
const users = ['Ali','Sara','John','Emma','Zara'];

const Last2Elem = users.slice(-2); // OUtput:- [ 'Emma', 'Zara' ]
console.log(Last2Elem);

// Explanation
console.log("\n -2 refers to the second to last element of the array when we wrote slice -2 it sliced last two elements of array.")