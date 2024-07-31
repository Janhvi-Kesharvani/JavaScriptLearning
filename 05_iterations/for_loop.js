// for loop 

//syntax-

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop value: ${j} and inner loop ${i}`);

        // console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}

let myarr = ["flash", "batman", "superman"]
// console.log(myarr.length);

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
}

//break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(` values of i ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(` values of i ${index}`);
    
}