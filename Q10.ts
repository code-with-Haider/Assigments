

let personName: string = "Haidar ali"; 

// this will change name to lower case
let lowercaseName: string = personName.toLowerCase();

// this will change it to upper case
let uppercaseName: string = personName.toUpperCase();

// this will split the name from spaces into array of and will store it into array name: words

let words: string[] =personName.split(" ");

// here taking an empty string
let titleCaseName: string = "" 

// using for loop to calling each word one by one from array words in order from 0 to end and chaning first chracter of each word in upper case and remaing in lower add adding them in empty string title case name one by one and space in between.

for (let i = 0; i < words.length; i++) {
     titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " "
    };
// here is result

console.log(lowercaseName);
console.log(uppercaseName);
console.log(titleCaseName);


