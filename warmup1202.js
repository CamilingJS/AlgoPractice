//You are given a list of numbers as a single number datatype. 
//Break down the number into individual single digit numbers,
// count the number of odds and evens, and return true if even and false if odd

let num1 = "123456789";
let num2 = "235489237582370923740283765082348";
let num3 = "09782098572837587239047832048021938409189481";

// const numbreakdown = (num) => {
//     let digits = num.toString().split('');
//     console.log(digits);
//     let realDigits = digits.map(Number);
//     console.log(realDigits);
//     let sum;
//     for (let i = 0; i < realDigits.length-1; i++){
//         sum += (realDigits[i]);
//     }
//     console.log(sum);
    
    
// }

const greaterEvenCount = (num) => {
    let odds = 0;
    let evens = 0;

    num.split('').forEach(n => {
        if ((n%2) != 0) {
            odds++;
        } else {
            evens++;
        }
    });
}

return evens > odds ? true : false; 

console.log(numbreakdown(num1));
console.log(numbreakdown(num2));
console.log(numbreakdown(num3));


