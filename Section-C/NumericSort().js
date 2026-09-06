/* Ques 33:- Numbers ko ascending aur descending sort karo.
const numbers=[50,10,40,20,30];

Requirements:
84. Ascending comparator.
85. Descending comparator.
86. Mutation behavior.
*/

// Code Solution
const numbers = [50, 10, 40, 20, 30];

// Ascending Sort
const ascendingSort = numbers.sort((a, b) => a - b); // a = 50, b = 10, a - b = 40 (positive value means a comes after b)
console.log("Ascending Sort:-", ascendingSort); // Output: [10, 20, 30, 40, 50]

// Explanation of Ascending Sort
console.log("\nExplanation:- In the ascending sort, the compare function (a - b) returns a positive value when a > b, which means a comes after b in the sorted array. Conversely, it returns a negative value when a < b, meaning a comes before b.");

// Descending Sort
const descendingSort = numbers.sort((a, b) => b - a); // a = 50, b = 10, b - a = -40 (negative value means b comes before a)
console.log("Descending Sort:-", descendingSort); // Output: [50, 40, 30, 20, 10]

console.log("\nOriginal Array After Sorting:-", numbers); // Output: [50, 40, 30, 20, 10] (The original array is mutated)

// Explanation of Descending Sort
console.log("\nExplanation:- In the descending sort, the compare function (b - a) returns a positive value when b > a, which means b comes before a in the sorted array. Conversely, it returns a negative value when b < a, meaning b comes after a.");

// Mutation Behaviour
console.log("\nMutation Behavior:- The sort() method sorts the array in place, meaning it modifies the original array. Therefore, after sorting, the original 'numbers' array is changed to reflect the sorted order.");