// Given an array of numbers, find the subset of three numbers that produces the hightest sum. 
// The submset must be in a series.
// If there is more tha one set that its the parameters return the set that has a lower index.

const array1 = [3, -4, 12, -8, 5,16];
const array2 = [-27, 27, 80, 15, -15,45];
const array3 = [300, -150, 150, -80, 130, 120];
//bonus...
const array4 = [-41, 46, 3, -3, -6, -38, -14, -26, -22, -1, -36, 26, 42, -34, -43, 24, -2, 5, 44, 11, -20, -37, 19, 17, 
    45, -49, -45, -30, 47, 39, -25, 15, 41, 43, 14, 23, -21, 32, -7, 37, 28, 2, -46, 27, 4, 10, -40, 38, 48, 6]
const findLargestTriplet = (numArray) => {
   

    let largestNum = Number.NEGATIVE_INFINITY; 
    let returnArray = []

    for (let i = 0; i < numArray.length - 2; i++) {
        
        let total = numArray[i] + numArray[i+1] + numArray[i+2];
        if (total > largestNum) {
            largestNum = total;
            returnArray = [numArray[i], numArray[i+1], numArray[i+2]];
        }
    }

    return returnArray;
}


console.log(findLargestTriplet(array1));
console.log(findLargestTriplet(array2));
console.log(findLargestTriplet(array3));
console.log(findLargestTriplet(array4));