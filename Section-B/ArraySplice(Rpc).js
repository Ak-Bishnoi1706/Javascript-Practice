/*QUES 13:- 'JavaScript' ko 'TypeScript' se replace karo using splice().
const languages = ['HTML','CSS','JavaScript','Python'];

Requirements:
33. Start index identify karo.
34. Code aur final array do. */

// Explanation
console.log("We will take starting index as 2 because it is the index of value we want to modify.");

const languages = ['HTML','CSS','JavaScript','Python'];

console.log('Removed element:- ', languages.splice(2, 1, 'TypeScript')); //['JavaScript]
console.log('Updated array:- ', languages); // ['HTML','CSS','TypeScript','Python'];