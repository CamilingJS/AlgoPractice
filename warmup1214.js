// You are given a string of numbers by commas. If there are more odd numbers return "odd". If there are more even numbers return "even". 
//If they are the same amount of both return "equal"

// arrayName.split(',')
// numArray.filter((num)=> num > 0)

numSet1 = "3,4,56,3,4,6,8,9,1,3,6,7,8,3,2,4,6,8,6,4,1,2,3,0";
numSet2 = "7,9,12,13,27,19,16,23,25,89,90,102,105,109,107,110";
numSet3 = "17,19,200043, 800028, 9000012, 780343, 342356,23452342,2345234,234274598,78979834, 3426767";
numSet4 = "3,5,9,7,1,3,7,9";
numSet5 = "4,8,0,2,4,6,8,10";
numSet6 = "4,3,2,1";

// const evenOrOddString = (numSet) => {
//     let newArr = numSet.split(",")

//     let evens = newArr.filter((num) => num %2 === 0);
//     let odds = newArr.filter((num) => num %2 !== 0);
 
//     let evenCount = evens.length
//     let oddCount = odds.length
 
//     if (evenCount > oddCount) {
//         return "EVEN"
//     }
//     if (evenCount < oddCount) {
//         return "ODD"
//     }
//     if (eventCount = oddCount) {
//         return "EQUAL"
//     }

// }

const evenOrOddString = (numSet) => {
    let newArr = numSet.split(",")
    let evens = newArr.filter((num) => num%2 === 0);
    let odds = newArr.filter((num) => num%2 !==0);

    if (evens.length > odds.length){
        return "EVEN";
    }
    if (evens.length < odds.length){
        return "ODD";
    }
    if (evens.length = odds.length){
        return "EQUAL"
    }
}


console.log(evenOrOddString(numSet1));
console.log(evenOrOddString(numSet2));
console.log(evenOrOddString(numSet3));
console.log(evenOrOddString(numSet4));
console.log(evenOrOddString(numSet5));
console.log(evenOrOddString(numSet6));
//  https://www.w3schools.com/jsref/jsref_filter.asp
//  https://www.w3schools.com/jsref/jsref_split.asp
//  https://www.w3schools.com/jsref/jsref_length_string.asp


//REVIEWED ON 2.18.2021 - JC