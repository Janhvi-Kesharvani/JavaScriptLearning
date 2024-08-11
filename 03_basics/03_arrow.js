// Note - this - this keyword refers to the current context.

const user = {
  userName: "John",
  price: 99,
  welcomeMessage: function () {
    // console.log(`${this.userName}, welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.userName = "sam";
// user.welcomeMessage()

// console.log(this); // Output - {}

// function one () {
//     let userName = "Ram";
//     console.log(this.userName);
// }

// one () // output - undefined

// const one = function () {
//     let userName = "Shyam"
//     console.log(this.userName);
// }

const one = () => {
  let userName = "jjj";
  console.log(this.userName);
};
// one ();

// ************ Explicite return *********************

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3,2));

//*****************Implicit return ************************** */

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({name: "ABC"});


console.log(addTwo(1,2));

const myArr = [2, 4, 5, 8]

// myArr.forEach(() => {})