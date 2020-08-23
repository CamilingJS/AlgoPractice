let num1 = 23423423434;
let num2 = 123467890;
let num3 = 983424998002932;
const descendingOrder = (num) => parseInt(num.toString().split(‘’).sort().reverse().join(‘’));
console.log(descendingOrder(num1));
console.log(descendingOrder(num2));
console.log(descendingOrder(num3));

// i dont have the question but it was to make the numbers go in descending order
// so you had to like convert it to a string
// then you had to split it
// then sort it so it’s in the right order, then reverse that order to get what we want
// and then i forget what the join is, i think the join makes it back into being a number from an array
// and then parseInt actually returns the number?



let sentence = '';
while (true) {
  let word = prompt("Enter a word", '');
  //if (!value) break;
  sentence += word;
}
console.log( 'Sentence: ' + sentence );
// Make a while loop that terminates if the input string === 'end'