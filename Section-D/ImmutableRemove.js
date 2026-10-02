/* Ques 47:- Users se id 3 remove karo without mutating original.
const users=[{id:1,name:'Ali'},{id:2,name:'Sara'},{id:3,name:'John'}];

Requirements:
- Solution.
- Why original remains unchanged?
*/

const users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'John' }
];

// Solution: use filter() to create a new array without id 3
const updatedUsers = users.filter(user => user.id !== 3);

console.log("Original Users:-", users);
console.log("Updated Users (id 3 removed):-", updatedUsers);

// Expected Output
// Original Users:- [ {id:1,name:'Ali'}, {id:2,name:'Sara'}, {id:3,name:'John'} ]
// Updated Users:- [ {id:1,name:'Ali'}, {id:2,name:'Sara'} ]

// Explanation
/*
- filter() creates a new array based on the condition (user.id !== 3).
- The original array is never changed because filter() is a non-mutating method.
- Instead of modifying "users", it returns a fresh array "updatedUsers".
- This is called immutability: the original data stays intact, and we work with a new copy.
- Return used: user objects except the one with id 3.
*/