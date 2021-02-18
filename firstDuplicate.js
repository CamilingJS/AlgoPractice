a = [2,1,3,5,3,2]
function firstDuplicate(a) {
for (let i = 0; i < a.length; i++){
    if (a[i+1] === a[i]){
     return(a[i+1]);
     console.log(a[i+1]);
    }   
}
}
firstDuplicate(a)


