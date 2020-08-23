//create a fx that takes 2 alpha values, adds them alphanumberically. If the amnt goes over 26 it should wrap around
//back to the fornt of the alphabet. 

const addAlpha = (a,b) => {
//  let sumOfLetters = (a.toLowerCase().charCodeAt(0)-97+1) + (b.toLowerCase().charCodeAt(0)-97+1);
//  console.log(sumOfLetters)

firstLetter = a.toLowerCase().charCodeAt(0)-97+1
secondLetter = b.toLowerCase().charCodeAt(0)-97+1


// let finalLetter = String.fromCharCode(sumOfLetters + 96); 
// console.log(finalLetter);

return String.fromCharCode((firstLetter + secondLetter > 26) ? ((firstLetter + secondLetter +96 ) -26) : (firstLetter + secondLetter + 96)); 

}




console.log(addAlpha("A", "D"));
console.log(addAlpha("C", "D"));
console.log(addAlpha("g", "f"));
console.log(addAlpha("d", "q"));
console.log(addAlpha("z", "z"));