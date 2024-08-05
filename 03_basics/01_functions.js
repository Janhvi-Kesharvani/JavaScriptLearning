function sayMyName () {
    // console.log("J");
    // console.log("A");
    // console.log("N");
    // console.log("H");
    // console.log("V");
    // console.log("I");
}

sayMyName();

// function addTwoNumbers(num1, num2) {  // when we call these things and pass something (num1, num2) it is called parameters 
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    let result = num1 + num2
    return result
    // console.log("example"); // this will not execute because by default after return, no execution will  be done.
}

const result = addTwoNumbers(3,4); //when we pass the value (3,4) then we call this argument

// console.log(`Result: ${result}`);

function loginUserMessage (username) {
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Janhvi"));
// console.log(loginUserMessage()); // if you are not pass any argument then it will return undefined 

// ********************

// function loginUserMessage1(username) {
//     if(username === undefined){
//         console.log(`Please Enter Username`);
//     }
//     return `${username} just logged in`
// }

// function loginUserMessage1(username) {
//     if(!username){
//         console.log(`Please Enter Username`);
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage1("abc"));

function loginUserMessage1(username = "sam") {
    if(!username){
        console.log(`Please Enter Username`);
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage1());
// console.log(loginUserMessage1("abc"));

// if don't know how many arguments required---
// Note - '...' restoperator/spread operator

function calculatCartPrice(...num1) {   //rest operator here
    return num1
}
// console.log(calculatCartPrice(200, 400, 500, 600));  //output - [ 200, 400, 500, 600 ]

function calculatCartPrice1(val1, val2, ...num1) {  //rest operator here
    return num1
}

// console.log(calculatCartPrice1(200, 300, 400, 600));  //o/p - [ 400, 600 ] it consider 200-val1 and 300- val2 and we are not returning val1 and val2

//****************** */
const user = {
    userName : "Sam",
    price : "100",
}

function handleObject (anyObject) {
    // console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`); 
}

// handleObject(user)

//************************ */

handleObject({
    userName : "Ram",
    price : "00",
})

// console.log(handleObject(user));

const myNewArr = [200, 400, 500, 600]

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100, 900, 222, 910]));

