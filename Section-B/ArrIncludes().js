/*QUES 20:- Roles array mein admin aur manager present hain ya nahi check karo.
const roles = ['user','editor','admin'];

Requirements:
51. Two includes calls.
52. Boolean outputs.
*/

// Explanation
console.log('Includes() method checks whether an array includes a certain element, returning true or false as appropriate. \n It takes two parameters:- \n @param searchElement — The element to search for. \n @param fromIndex — The position in this array at which to begin searching for searchElement. ')

const roles = ['user', 'editor', 'admin', 'student', 'designer', 'customer'];

// Check if 'admin' is present in the roles array
const check1 = roles.includes('admin');
console.log('\nIs Admin Present:- ', check1);

// Check if 'manager' is present in the roles array
const check2 = roles.includes('manager');
console.log('Is manager presnt:- ', check2);

// Double check defining both parameters
const check3 = roles.includes('admin', 3); // False
console.log("is Admin present after 3rd index", check3);

