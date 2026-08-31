/* Ques 19:- Array ka shallow copy banao aur nested object mutation ka effect explain karo.
const users = [{ id: 1, name: 'Ali' }];

Requirements:
Shallow copy banao.
Nested name change karo.
Original par effect explain karo.
*/

// Explanation:
console.log("Shallow copy means when we copy references of an object or array, not the actual values. \n- Syntax:- \n const shallowCopy = [...originalArray]; \n const shallowCopy =  \n- So if we change a nested object in the copied array, it will also affect the original array because both arrays point to the same nested object in memory. \n- It returns a new array, but the objects inside it are still references to the same objects in memory. ");

// Original array
const users = [{ id: 1, name: 'Ali' }];

// Creating a shallow copy of the original array
const shallowCopy = [...users];

// Changing the nested object in the shallow copy
shallowCopy[0].name = 'Anand';

// Logging both arrays to see the effect
console.log("\nOriginal Array:", users); // Output: [{ id: 1, name: 'Anand' }]
console.log("Shallow Copy:", shallowCopy); // Output: [{ id: 1, name: 'Anand' }]