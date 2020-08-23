let array1 = [1,2,3,4,10,11,12,13];
let array2 = [9,10,11,13,12,13,15];
let array3 = [17,18,19,20,21];
let array4 = [6,2,3,4,5];


const checkConsecutive = (numArray) => {

    let initNum = numArray[0];
    
    for (let i = 0; i < numArray.length; i++) {

        if (numArray[i] + 1 != numArray[i + 1]) {
            return numArray[i + 1];
        }

    }
    return null;
    
    }

console.log(checkConsecutive(array1));
console.log(checkConsecutive(array2));
console.log(checkConsecutive(array3));
console.log(checkConsecutive(array4));