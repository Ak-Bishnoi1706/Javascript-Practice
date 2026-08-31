/* Ques 24:-  Products mein id 20 wale product ka index find karo.
const products = [{id:10,name:'Mouse'},{id:20,name:'Keyboard'},{id:30,name:'Monitor'}];

Requirements:
findIndex call.
Returned index.
-1 safely handle kaise?
*/

// Explanation
console.log("FindIndex:- FindIndex means to search for an element in the array and return its index.\n- It returns the index of the first element in the array that satisfies the provided testing function.\n- If no values satisfy the testing function, -1 is returned. \n- Syntax:- array.findIndex(callback() => condition) \n- callback:- Function to execute on each value in the array. It takes three arguments: element, index, and array. \n- thisArg:- Optional. Value to use as this when executing callback.\n");

// Code 
const products = [{id:10,name:'Mouse'},{id:20,name:'Keyboard'},{id:30,name:'Monitor'}];

// FindIndex of the id:20
const IndexOfId20 = products.findIndex(u => u.id === 20);
console.log("Returned Index:- ", IndexOfId20);

// Handle no-match result
const NoMatchIndex = products.findIndex(u => u.name === "Printer");
if (NoMatchIndex === -1) {
    console.log("No value found, returned index is -1");
} else {
    console.log("Value found at index: ", NoMatchIndex);
}

console.log("\n This is how we can safely handle the no-match result by checking if the returned index is -1 or not.");
