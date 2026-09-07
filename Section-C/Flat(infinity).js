/*Ques 39:- Deeply nested array ko completely flatten karo.
const data=[1,[2,[3,[4,[5]]]]];

Requirements:
99. Code.
100. Output.
101. Infinity depth meaning.
 */

// Code solution
const data = [1, 
                [2, 
                    [3, 
                        [4, [5]]
                    ]
                ]
            ];

/* Depths Explain:-
const data = [1, -> Parent level
                [2, -> 1st level
                    [3, - 2nd level
                        [4, -> 3rd level
                            [5] -> 4th level
                        ]
                    ]
                ]
            ];
*/

// Step 1: Flatten the deeply nested array completely using flat(Infinity)

const flattenedData = data.flat(Infinity);
console.log("Flattened Array (Depth Infinity):-", flattenedData);
// Output: [1, 2, 3, 4, 5]

// Explanation of flat(Infinity):
console.log("\nflat(Infinity) means it flattens all levels of nested arrays until no nested arrays remain. \n- It is useful for deeply nested structures where the depth is unknown or variable. \n- In simple words it flattens the parent array and all its nested arrays untill no nested arrays remain. \n- It is a non-destructive method, returning a new array without modifying the original.");

/* 🔹 Shallow vs Deep Copy:
   - flat() creates a **shallow copy** of the array.
   - Nested objects/arrays are not deeply cloned, only references are copied.
   - Example: if elements are objects, changes in flattened array reflect in original objects.
*/

/* 🔹 Reference Behavior:
   - flat() returns a **new array** (not the same reference).
   - Example: flattenedData === data → false
*/

/* 🔹 Key Points:
   - Mutability: flat() is non-destructive (original array unchanged).
   - Depth awareness: Infinity ensures complete flattening.
   - Shallow copy: references of objects remain same, not deep cloned.
   - Use-cases: Flattening deeply nested arrays for APIs, database storage, or visualization.
   - Performance note: flat(Infinity) can be costly for very large arrays.
*/