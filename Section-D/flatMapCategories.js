/* Ques 46:- Categories ke nested products ko dropdown options {label,value} objects mein convert karo.
const categories=[
  {name:'Laptop',products:[{id:1,name:'MacBook'},{id:2,name:'Dell'}]},
  {name:'Phone',products:[{id:3,name:'iPhone'}]}
];

Requirements:
- Expected structure.
- flatMap solution.
*/

const categories = [
  { name: 'Laptop', products: [{ id: 1, name: 'MacBook' }, { id: 2, name: 'Dell' }] },
  { name: 'Phone', products: [{ id: 3, name: 'iPhone' }] }
];

// flatMap solution
// Step 1: Each category has a "products" array.
// Step 2: flatMap() goes through each category and maps its products into {label,value} objects.
// Step 3: flatMap flattens all product arrays into one single array of dropdown options.
const options = categories.flatMap(category =>
  category.products.map(product => ({
    label: product.name,   // label = product name
    value: product.id      // value = product id
  }))
);

console.log("Dropdown Options:-", options);

// Expected Output
// [
//   {label: "MacBook", value: 1},
//   {label: "Dell", value: 2},
//   {label: "iPhone", value: 3}
// ]

// Explanation
/*
- Each category contains multiple products.
- We want to convert all products into dropdown option objects {label,value}.
- flatMap() is used because:
   → First it maps products of each category into {label,value}.
   → Then it flattens them into one single array.
- Return used: product objects converted into {label: product.name, value: product.id}.
- Final structure is a flat array of option objects, ready for dropdowns.
*/
