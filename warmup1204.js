// Given an array of numbers, remove all zeros from the array and return it in the same order

let numList1 = [3,45,65,54,3,0,567,0,345,0,455,0, 1, 2];
let numList2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let numList3 = [0,30,0,4,0,6,9,10,0,3,0,5,0,-9,0,0,-22];

const removeZeros = (numList) => {
    let newArray = [];
    numList.forEach(num => {
        if (num !=0) {
            newArray.push(num);
        }
    })
    return newArray
}

console.log(removeZeros(numList1));
console.log(removeZeros(numList2));
console.log(removeZeros(numList3));



