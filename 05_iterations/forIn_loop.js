const language = {
    js : "javascript",
    rb : "ruby",
    cpp : "C++",
    swift : "swift by apple"
}

//Syntax----
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const key in language) {
    // console.log(key);
    // console.log(language[key]);
    // console.log(`${key} shortcut is for ${language[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//    console.log(key);
// }

// Note - maps are not iteratable so it will not give anything in output
