//Write a fx which takes a list of strings and returns each lined
//prepended by the correct number 
//the numbering starts at 1, and the format is n:strings 

// number([]) => []

// number(["a", "b", "c"]) => 

let document1 = ["a", "b", "c"];
let document2 = ["The quick brown", "fox jumped over", "the lazy dog"];
let document3 = ["Sphinx of", "black quartz,", "judge", "my vow"];

// const numberLines = (document) => {
//     document.map((line, i) => {
//         let newLine = i + ": " + line; 
//         // let newLine = "1: " +document[0]+","
//         console.log(newLine);
//     });
//     return document;
// }

const numberLines = (document) => document.map((line, i) => `${i + 1}: ${line});


console.log(numberLines(document1));
console.log(numberLines(document2));
console.log(numberLines(document3));
