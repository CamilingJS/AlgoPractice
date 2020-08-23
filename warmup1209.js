// sort numbers in the array, covert number in string into numbers, 
//return the numbers 2x 


const list1 = ['dfsd', 903, 'ere', '456', '009', '9809snowball3434', 5555];
const list2 = ['1', '2', '3', '4', '5', 't', '0', 333, 777, 2];

const findAndDoubleNums = (numList) => {
    let newArray = numList.filter( n => !isNaN(n))
    .map( n => parseInt(n*2) )   ;   // dotfilter is a loop
    return newArray; 
    
}
console.table(findAndDoubleNums(list1));
console.table(findAndDoubleNums(list2));