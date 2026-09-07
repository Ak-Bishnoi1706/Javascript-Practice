/*Ques 36:- Both approaches se array reverse karo aur original behavior compare karo.
const numbers=[1,2,3,4];

Requirements:
92. reverse example.
93. toReversed example.
94. Mutation difference.
 */

// Code solution
const numbers = [1, 2, 3, 4];

// Reverse Method - destructive method
console.log("Reverse Method change elements order in place and returns the reversed array, reference to the same array. It mutates the original array. \n- Old ES5 method to reverse an array.\n- It is a destructive method, which means it modifies the original array.");

numbers.reverse();
console.log("Reverse Method:-", numbers); // Output: [4, 3, 2, 1]

// RETURN VALUE:- Returns same array object after reversing the elements order.
const result = numbers.reverse();
console.log("Same Array Object?", result === numbers); // Output: true

/* USE CASE:- When you want to see the last index elements to upto first index elements.
    -Useful in stack-like operations or sorting scenarios.
    -real world examples:- chat app mein messages ko reverse karna, history, etc.
*/

// ToReversed Method - non-destructive method
console.log("\nToReversed Method returns a new array (shallow copy) with the elements in reverse order without changing the original array. It is an immutable method. \n- New ES2023 method to reverse an array.\n- It is a non-destructive method, which means it does not modify the original array.");

const numbers2 = [1, 2, 3, 4];
const reversedArray = numbers2.toReversed();

console.log("ToReversed Method:-", reversedArray);
console.log("Original Array after ToReversed:-", numbers2); // Output: [1, 2, 3, 4]

// RETURN VALUE:- Returns a new array with the elements in reverse order.
console.log("Same Array Objects?", reversedArray === numbers2); // Output: false

