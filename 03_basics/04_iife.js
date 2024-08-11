// Immediately Invoked Function Expressions (IIFE)

(function one () {
    //named iife
    console.log(`DB connected`);
}) ();

( (name) => {
    //unnamed iife
    console.log(`DB connected 2 ${name}`);
}) ('janhvi')