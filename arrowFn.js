//FOR EACH FUNCTION
// const numbers = [20,2,3,4,5,6,7];
// numbers.forEach(function (num) {
//     console.log(num*2);
// })
// function printTriple(n) {
//     console.log(n*3);
// }
// numbers.forEach(printTriple);
// numbers.forEach(function (num, idx) {
//     console.log(idx, num*2)
// })

//MAP FUNCTION
const numbers = [20, 21, 23, 43, 22, 1];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num){
    return num*2;     
})

const numDetail = numbers.map(function(n){
    return {
        value: n,
        isEven: n % 2 === 0
    }
})

console.log(numDetail);

// console.log(doubles);

