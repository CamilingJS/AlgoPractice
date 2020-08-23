const phoneNumber1 = [6,2,5,4,8,9,1,7,6,4];
const phoneNumber2 = [3,1,2,7,8,6,4,3,2,3];
const phoneNumber3 = [9,0,9,4,3,8,9,4,6,0];


// const formatPhoneNumber = (n) => {  

// let phoneString = n.join('');
// console.log(phoneString);
// let newPhoneString = 
// console.log(phoneString);


// } 


const formatPhoneNumber = (n) => {  
    let template = '(xxx) xxx-xxxx';
    for (let i = 0; i < n.length; i++) {
        template = template.replace('x', n[i]);
    }
    return template
    
    } 


console.log(formatPhoneNumber(phoneNumber1)); // "(625) 489-1764"
console.log(formatPhoneNumber(phoneNumber2)); // "(312) 786-4323"
console.log(formatPhoneNumber(phoneNumber3)); // "(909) 438-9460"


//other option:
// const formatPhoneNumber = (n) => "(xxx) xxx-xxxx".replace(/x/g, () => n.shift() );