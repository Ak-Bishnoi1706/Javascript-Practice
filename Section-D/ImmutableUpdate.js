/* Ques 48:- id 2 user ka name 'Sara Khan' karo without mutating original.
const users=[{id:1,name:'Ali'},{id:2,name:'Sara'},{id:3,name:'John'}];

Requirements:
- Solution.
- Non-matching objects ka behavior.
*/

const users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'John' }
];

// Solution: use map() to create a new array with updated object
const updatedUsers = users.map(user =>
  user.id === 2
    ? { ...user, name: 'Sara Khan' } // if id matches → return new object with updated name
    : user                          // if id does not match → return the same object unchanged
);

console.log("Original Users:-", users);
console.log("Updated Users (id 2 name changed):-", updatedUsers);

// Expected Output
// Original Users:- [ {id:1,name:'Ali'}, {id:2,name:'Sara'}, {id:3,name:'John'} ]
// Updated Users:- [ {id:1,name:'Ali'}, {id:2,name:'Sara Khan'}, {id:3,name:'John'} ]

// Explanation
/*
- map() creates a new array by applying a function to each element.
- For user with id 2, we spread the old object {...user} and override the name property.
- For all other users (non-matching objects), we simply return them as they are.
- This ensures immutability: the original array "users" remains unchanged.
- Return used:
   → Matching object: new object with updated name.
   → Non-matching objects: original object returned unchanged.
*/
