/* Ques 49:- Active products mein price > 2000 select karo, price ascending sort karo, final names return karo.
const products=[
  {name:'Laptop',price:60000,active:true},
  {name:'Mouse',price:1200,active:true},
  {name:'Keyboard',price:2500,active:true},
  {name:'Monitor',price:15000,active:false}
];

Requirements:
- Method chain.
- Expected output.
- Order explain.
*/

const products = [
  { name: 'Laptop', price: 60000, active: true },
  { name: 'Mouse', price: 1200, active: true },
  { name: 'Keyboard', price: 2500, active: true },
  { name: 'Monitor', price: 15000, active: false }
];

// Method chain solution
const result = products
  .filter(p => p.active && p.price > 2000)   // Step 1: keep only active products with price > 2000
  .toSorted((a, b) => a.price - b.price)    // Step 2: sort ascending by price
  .map(p => p.name);                        // Step 3: return only product names

console.log("Final Result:-", result);

// Expected Output
// ["Keyboard", "Laptop"]

// Explanation
/*
- Step 1 (filter): removes inactive products and those with price ≤ 2000.
   → Remaining: [{name:"Laptop",price:60000,active:true}, {name:"Keyboard",price:2500,active:true}]
- Step 2 (toSorted): sorts by price ascending.
   → Order: Keyboard (2500), Laptop (60000)
- Step 3 (map): extracts only names.
   → Final result: ["Keyboard", "Laptop"]

- Why original remains unchanged:
   → filter(), toSorted(), and map() are all non-mutating methods.
   → They return new arrays instead of modifying the original "products".
*/
