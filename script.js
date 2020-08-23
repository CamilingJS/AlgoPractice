//nathan driks 0.5 litres of water per hour cycling
// given the hours, return the number of liters Nathan will drank rounded to the smallest value

//for example:
//time = 3 ---> litres = 1
//tiem = 6.7 ---> liters = 3
// time 11.8 --> liters = 5

// const waterrate = (time) => {
//     const literRate = 0.5;
//     const amountDrank = time*literRate;
//     const roundedAmountDrank= Math.floor (amountDrank); 
//     return roundedAmountDrank; 
// }

// console.log (waterrate(3));
// console.log (waterrate(6.7));
// console.log (waterrate(3));


// const string1 = "freeway";
// const string2 = "Catacombs";
// const string3 = "Tuesday morning";

// const reverseSansFirstAndLast = (inputString) =>{
//     for (let i = inputString.length-1; i >= 0; i--){
//      console.log(inputString[i])   
//     }
//     }

// console.log(reverseSansFirstAndLast(string1))


//other solution

// let string1 = "Freeway";

// const reverseSanFirstAndLast = (inputString) => {
//     let arrayString = inputString.split('');
//     let firstLetter = arrayString.shift('');
//     let lastLetter = arrayString.pop();
//     arrayString.reverse();

//     arrayString.unshift(firstLetter);
//     arrayString.push(lastLetter);

//     return arrayString.join('');
// }
// console.log(reverseSanFirstAndLast(string1))


//other solution

// let string1 = "Freeway";
// const reverseSansFirstAndLast  = (inputString) => inputString[0] + inputString.substring(1, inputString.lenght-1).split('').reverse().join('') + inputString[inputString.length-1];

// console.log(reverseSansFirstAndLast(string1));


// const queue1 = ["sheep", "wolf", "sheep","sheep","sheep","sheep","sheep"];
// const queue2 = ["sheep", "sheep", "sheep","sheep","sheep", "sheep", "wolf"];
// const queue3 = ["wolf", "sheep", "sheep","sheep","sheep","sheep","sheep"];

// const warnTheSheep = (queue) => {
//         if (queue.indexOf("wolf") === queue.length-1) return"Go Home You Wolf";
//         return "Oi! Sheep Number " + (queue.length - wolfIndex - 1) + "! Git!";

// }


// console.log(warnTheSheep(queue1));
// console.log(warnTheSheep(queue2));
// console.log(warnTheSheep(queue3));


// Warmup #4 Suiting the Code... 
// Write a function that takes a string finds a suit and returns the string with asci suit character 

// const suites = {
//         spade: "♠",
//         heart: "♥",
//         diamond: "♦",
//         club: "♣"
// }

// const string1 = "He played the 5 of the :hearts:.";
// const string2 = "Her hand had a pair of :club:s and a :diamond:.";
// const string3 = ":heart::spade::club::diamond:";

// const addEmoji = (text) => {
//         let suitKeys = Object.keys(suits);
        
//         suitKeys.forEach((key) => {
//         text = text.replace (':' + key + ':', suits[key]);
        
//         });
        
//         return text;
        
// }

// console.log(addEmoji(string1));
// console.log(addEmoji(string2));
// console.log(addEmoji(string3));


