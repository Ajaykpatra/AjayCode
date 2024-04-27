// string


/* const name ="Ajay"
 const repocount = 30

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); */


const gameName = new String("ajaykumar")


// console.log(gameName [0]);
// console.log(gameName.__protp__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);


const newStringOne = "  ajay  "
console.log(newStringOne);

console.log(newStringOne.trim());


const url = "https:/ajay.com/ajay%25kumar"

console.log(url.replace('%25','_'));

console.log(url.includes('ajay'));


const hundreds = 100000000000
//International

console.log(hundreds.toLocaleString());

//Indian
 //console.log(hundreds.toLocaleString('en-IN'));

 