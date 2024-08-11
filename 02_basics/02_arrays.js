const girlName = ["gita", "sita", "mita"];
const boyName = ["ram", "shyam", "golu"];

girlName.push(boyName);
// console.log(girlName);   // [ 'gita', 'sita', 'mita', [ 'ram', 'shyam', 'golu' ] ]

let allName = girlName.concat(boyName)
// console.log(allName);               // ['gita','sita', 'mita', 'ram', 'shyam', 'golu']

//  Note - concat returns new arrays meanwhile push returns value in same array
//Note - push return array inside the array but concat return one array which both arrays element

const allName1 = [...girlName, ...boyName]
// console.log(allName1);            // ['gita','sita', 'mita', 'ram', 'shyam', 'golu']

//Note - concat and ... method both join two arrays but concat add only 2 array at a time but ... array can merge more than 2 array

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArr = anotherArr.flat(Infinity)

// console.log(realAnotherArr);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
// ]

//Note - return new array with all sub-array

// console.log(Array.isArray("Janhvi"));  // false (asking string "janhvi" is a array)
// console.log(Array.from("janhvi"));      //[ 'j', 'a', 'n', 'h', 'v', 'i' ] change string "janhvi" to array 
// console.log(Array.from({name: "janhvi"})); // [] it return empty array, when it will not able to convert, it will return empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));   //[ 100, 200, 300 ] returns a new array from a set of element
