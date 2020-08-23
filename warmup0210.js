let s1 = "HelloWorld";
let s2 = "HelloKitty";

function twoString(s1, s2){

let largestString = '';

for ( let i = 0; i < s2.length; i++) {
    for (let j = 0; j < s2.length; j++)
    if (s2.includes(s1.substring(i, j))) {
        if(s1.substring(i,j).length > largestString.length) {
            largestString = s1.substring(i, j);
        }
    }
}
}