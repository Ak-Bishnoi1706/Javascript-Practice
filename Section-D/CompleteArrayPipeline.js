/* Ques 51:- Travel bookings mein active bookings select karo, passengers flatten karo, names extract karo aur alphabetically sort karo without mutating source.
const bookings=[
  {id:1,active:true,passengers:[{name:'Zara'},{name:'Ali'}]},
  {id:2,active:false,passengers:[{name:'John'}]},
  {id:3,active:true,passengers:[{name:'Sara'},{name:'Adil'}]}
];

Requirements:
- Active bookings.
- flatMap passengers.
- Map names.
- Immutable alphabetical sort.
- Final output.
- Har method selection justify karo.
*/

const bookings = [
  { id: 1, active: true, passengers: [{ name: 'Zara' }, { name: 'Ali' }] },
  { id: 2, active: false, passengers: [{ name: 'John' }] },
  { id: 3, active: true, passengers: [{ name: 'Sara' }, { name: 'Adil' }] }
];

// Complete pipeline solution
const result = bookings
  .filter(b => b.active)                       // Step 1: keep only active bookings
  .flatMap(b => b.passengers)                  // Step 2: flatten passengers arrays
  .map(p => p.name)                            // Step 3: extract passenger names
  .toSorted((a, b) => a.localeCompare(b));     // Step 4: sort alphabetically (immutable)

console.log("Final Result:-", result);

// Expected Output
// ["Adil", "Ali", "Sara", "Zara"]

// Explanation
/*
- Step 1 (filter): select only active bookings → removes inactive ones.
- Step 2 (flatMap): collects all passengers from active bookings into one flat array.
- Step 3 (map): extracts only the "name" property from each passenger object.
- Step 4 (toSorted): sorts names alphabetically without mutating the original array.

- Why each method:
   → filter(): non-mutating, perfect for selecting active bookings.
   → flatMap(): handles one-to-many (each booking has multiple passengers), flattens automatically.
   → map(): extracts specific property (name) from passenger objects.
   → toSorted(): immutable sort, ensures original data stays unchanged.

- Final output: ["Adil","Ali","Sara","Zara"]
*/
