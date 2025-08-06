console.log("janhvi");

process.stdout.write("chai")
process.stdout.write("word")

//we can logs the data by using another way but if you run this file , 2nd method give chai and word both words in same line

console.table({city : 'Prayagraj'});
console.table({city : 'Prayagraj', name: "Janhvi"});

console.warn({city : 'prayagraj'})
console.warn({city : 'prayagraj'}, {name: 'janhvi'})