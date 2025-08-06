const user = {
    username: "Janhvi",
    loginCount  : 8,
    signIn : true,

    getUserDetails : function() {
        // console.log("got user detail from database");
        // console.log(`Username : ${this.username}`);
        // console.log(this); 
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


function userf(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new userf('abc', 12, true)
const userTwo = new userf('xyz', 12, true)
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);


// new keyword - 
