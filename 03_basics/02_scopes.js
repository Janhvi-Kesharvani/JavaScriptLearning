// {}  --- also scope, when curly braces are coming with functions, is called scope.

var c = 30;
let a = 300;

if(true) {
    let a = 10;
    const b = 20;
    // console.log(`inner a : ${a} `);
    // console.log(c);
    
}

// console.log(a);
// console.log(b);
// console.log(c); //it return 30, which is creating issue, because we declare 'c' inside if condition, so from here scope we needed

//Note - inside if condition whatever written, it is called "Block Scope", outside whatever written, it is called "Global Scope"

//**********Nested Scope***********//

function one() {
    const username = "janhvi"

    function two() {
        const website = "youtube";
        console.log(`username: ${username}`);
    }

    // console.log(`website : ${website}`);

    two()
    
}

// one()

if (true) {
    const username = "Ram";
    if (username == "Ram") {
        const website = "google";
        // console.log(username + website);
    }
    // console.log(website); // not accessible
}

// console.log(username); // not accessible


// ************ interesting example ******************

// console.log(addOne(5));

function addOne (num) {
    return num +1
}

// -- It is not possible to console before function call in this method -- it is called hosting
console.log(addTwo(5));

const addTwo = function (num) {
    return num +2
}


