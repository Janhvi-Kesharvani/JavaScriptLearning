// const userEmail = "janhvi@gmail.com";
const userEmail = [];

// if (userEmail) {
//     console.log("Got email");
// } else {
//     console.log("don't have email");
// }

// falsy values - false, 0, -0, Bigint 0n, "", null, undefined, NaN
// truthy values -"0", 'false', " ", [], {}, function(){}, 

// false == 0  ---- it will true
// false == ''  ---- it will true
// 0 == '' ---- it will true


// const emptyArray = []
// if (emptyArray.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {} 
// if (Object.keys(emptyObj).length === 0 ) {
//     console.log("object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15

console.log(val1);


//Terniary Operator

// consition ? true : false; --- syntax

const iceTeaPrice = 100;

iceTeaPrice<=80 ? console.log("less than 80"): console.log("more than 80");