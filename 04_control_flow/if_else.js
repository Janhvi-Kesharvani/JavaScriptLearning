// if statement

// const tempertaure = 41;

// if (tempertaure < 50) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }

/************* */

// const score = 200;
// if(score > 100) {
//     let power = "fly";
//     console.log(`User power ${power}`);
// }

// console.log(`User power ${power}`);

// *********

// const balance = 1000;

// if(balance > 500) console.log("test"), console.log("test2"); don't flow this

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750 ");
// } else if (balance < 900){
//     console.log("less than 900 ");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// && - all condition should be true then only it will return combine true.
// || - if one condition will true and others are false, it will provide true.

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}