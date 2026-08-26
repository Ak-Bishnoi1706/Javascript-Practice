/* QUES 12:- Index 2 par 'X' aur 'Y' insert karo without deleting existing elements.
const items = ['A','B','C','D'];

Requirements:
Correct splice call likho.
Final array batao.
*/

// Explanation
console.log("We will take deleteCount as 0 so that splice method only inserts elements and keeps all existing elements as they are. \nSo the output will be ['A', 'B', 'X', 'Y', 'C', 'D']. \n- splice() modifies the original array. \n- splice() → returns an array of removed elements. \nIn this case deleteCount = 0, so nothing is removed → it returns an empty array []");

const items = ['A','B','C','D'];
console.log("\nRemoved Array:- ", items.splice(2, 0, 'X', 'Y')); // []
console.log("Updated Array:- ", items); // ['A', 'B', 'X', 'Y', 'C', 'D']
