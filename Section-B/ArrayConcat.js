/* Ques 17:- Do arrays merge karo aur mutation behavior explain karo.
const frontend = ['HTML','CSS','JS'];
const backend = ['Python','Laravel'];

Requirements:
44. Merged array banao.
45. Original arrays check karo. 
*/

// OUTPUT CODE:- 
const frontend = ['HTML','CSS','JS'];
const backend = ['Python','Laravel'];

// Method 1:-
const JoinedArrays = frontend + "," + backend;
console.log("Joined Array manually:-\n", JoinedArrays);
console.log("Return Value:- ", typeof(JoinedArrays));

// Method 2:-
const ConcatedArray = frontend.concat(backend);
console.log("\nConcated Array using concat Method:-\n", ConcatedArray );
console.log('Return Value:-', typeof(ConcatedArray));


console.log("\nOriginal arrays:- \n", frontend, '\n', backend);

