// You are given a list of numbers seperate by dashes. Each number corresponds to a letter in the alphabet (1=a, 2=b,... 26=z)
// Return the alpha value of each list of numbers. Ignore case, and ignore spaces
//dotsplit
//dotjoin
//dotmap(num => num + 1)
//String.frommCharCode()

const message1 = '20-8-5-3-15-23-19-6-12-25-5-1-19-20';
const message2 = '18-5-1-3-20-9-19-8-1-18-4-5-18-20-8-1-14-14-15-4-5';

// const translateNumbers = (message) => {
//     let splittedString = message.split('-')
//     let mapping = splittedString.map( (num => String.fromCharCode((parseInt(num)) + 64))  );
//     let newmessage = mapping.join('');  
//     console.log(newmessage);
// }

const translateNumbers = (message) => {
    let splittedString = message.split('-');
    let mapping = splittedString.map((num => String.fromCharCode((parseInt(num))+64)));
    let newmessage = mapping.join('');
    console.log(newmessage);
}



console.log(translateNumbers(message1));
console.log(translateNumbers(message2));

//REVIEWED ON 2.18.21 - JC


