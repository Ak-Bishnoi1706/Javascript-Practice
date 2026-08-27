/*QUES 15:- Dono methods ke kam se kam four differences explain karo.

Requirements:
38. Mutation difference.
39. Return value difference.
40. Use-case difference.
41. Example code.
*/

// Explanation:- 
console.log("- SPLICE changes the original array, while SLICE does not. \n- SPLICE returns the removed elements, while SLICE returns a new array containing the selected elements. \n- SPLICE is used for adding/removing elements, while SLICE is used for creating a shallow copy of a portion of an array.");

// Example code
const cart = [{
    fruits: ["Apple", "Banana", "Mango"]
}];

// Using SLICE 
const slicedFruits = cart[0].fruits.slice(0, 2); // Creates a new array with the first two fruits
console.log("\nSliced Fruits:", slicedFruits);

// Using SPLICE
const splicedFruits = cart[0].fruits.splice(2, 0, "Orange"); // Adds "Orange" at index 2
console.log("Spliced Fruits:", cart[0].fruits); // Original array is modified

// Explanation of code:
console.log("\n- In the example above, we targeted the first index of cart and then used object destructuring to access the fruits array. We used SLICE to create a new array containing the first two fruits without modifying the original array. On the other hand, we used SPLICE to add 'Orange' to the original fruits array, which modified it directly.");