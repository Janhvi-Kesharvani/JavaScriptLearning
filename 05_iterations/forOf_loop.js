// for of Loop

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) {  //here  object means in which variable (array, object etc) we are applying loop
    
// }

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World !"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps - map only give unique values if any data you put 2 times it will show this to only one time 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);


// for (const key of map) {           //
//     console.log(key);
    
// }

// output - [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

for (const [key, value] of map) {
    // console.log(key,':-' , value );
}

// output -
// IN :- India
// USA :- United States of America
// Fr :- France

const myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of myObj) {  - for  object 'for of' loop will not work
//     console.log(key,':-' , value )
// }



