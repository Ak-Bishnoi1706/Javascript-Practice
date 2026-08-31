/* QUES 25. Logs array mein last successful log find karo.
const logs = [{id:1,success:true},{id:2,success:false},{id:3,success:true},{id:4,success:false}];

Requirements:
65. findLast call.
66. Returned object.
67. find() se difference.
 */

// Explanation
console.log("FindLast:- FindLast means to search for an element in the array and return the last element that satisfies the provided testing function.\n- It returns the last element in the array that satisfies the provided testing function.\n- If no values satisfy the testing function, undefined is returned. \n- Syntax:- array.findLast(callback() => condition) \n- callback:- Function to execute on each value in the array.\n");

// Code
const logs = [
    {id:1,success:true},
    {id:2,success:false},
    {id:3,success:true},
    {id:4,success:false}
];

// FindLast successful log
const lastSuccessfulLog = logs.findLast(Log => Log.success === true);
console.log("Returned Object:- ", lastSuccessfulLog);

// Difference between find() and findLast()
const firstSuccessfulLog = logs.find(Log => Log.success === true);
console.log("\nFirst Successful Log using find(): ", firstSuccessfulLog);
console.log("Last Successful Log using findLast(): ", lastSuccessfulLog);