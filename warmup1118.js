const getSum = (a,b) => {
    if (a ===b) return a; 
    let start;
    let finish;
    if (a > b) {
        start = b;
        finish = a;
    } else {
        start = a; 
        finish = b;
    }
    let sum = start;
    while (start != finish){
        sum += start + 1;
        start += 1; 
    }
    return sum;

}

console.log(getSum(5, -1));         //14
console.log(getSum(4, 1));          //10
console.log(getSum(10, -2));        //52
console.log(getSum(112, -112));     //0


