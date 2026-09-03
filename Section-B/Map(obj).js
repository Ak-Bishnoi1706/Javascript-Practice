/* Ques 27:- Products array se sirf names ka new array banao.
const products = [{id:1,name:'Laptop'},{id:2,name:'Mouse'},{id:3,name:'Keyboard'}];

Requirements:
71. map solution.
72. Expected output.
*/

// code
const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Mouse' },
  { id: 3, name: 'Keyboard' }
];

// Map to extract names from products
const names = products.map(n => n.name);

// Output -> [ 'Laptop', 'Mouse', 'Keyboard' ]
console.log(names);

// Explanation
/* Map method is used to transform each element of array and return it in new form. In this case, we are extracting the 'name' property from each object in the products array and creating a new array of names. The original products array remains unchanged, demonstrating the non-mutating behavior of the map method. 
Map (array) => take each element of the array and apply a function to it, returning a new array with the transformed values.
Map (object) => take each object of the array and apply a function to it, returning a new array with the transformed values.
Syntax:- array.map(callback() => transformation)
 */