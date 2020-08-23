//given a length of unique integers (n), find integer m.
//The efficicieny must be greater than O(n)!

// 1 < n[i] < 99
// m


let n = [7, 10, 11, 15, 18, 20, 26, 27, 28, 29, 32, 33, 36, 37, 39, 49, 52, 54, 55, 69, 83, 84, 86, 89, 94];
let m = 52;
const binarySearch = (n, m) => {   
    let mid = Math.floor((n.length)/2);
    if (n.length === 0) return false;

    if (n[mid] === m) return true;

    if (n[mid] > m) return binarySearch(n.slice(0, mid), m);
    else return binarySearch(n.slice(mid + 1, n.length), m);
}

console.log(binarySearch(n, 52, 0, n.length));
console.log(binarySearch(n, 2, 0, n.length));
console.log(binarySearch(n, 7, 0, n.length));
console.log(binarySearch(n, 94, 0, n.length));
console.log(binarySearch(n, 99, 0, n.length));