
// Q.01

// function showData(){
//     console.log("variable name is",name);
//     console.log("variable name is",age);
//     var name="ajay";
//     let age=374;
// }
// showData();


//  Q.02

// for (var i = 0; i < 4; i++) {
//   setTimeout(()=>console.log(i),1);
    
// }


// for (let i = 0; i < 4; i++) {
//     setTimeout(()=>console.log(i),1);
      
//   }

// Q.3
// const income={
//   skills:108,
//   monthly(){
//     return this.skills*108;
//   },
//   yearly:()=>888*this.skils,
// };
// console.log(income.monthly());
// console.log(income.yearly());

// Q.4

// console.log(+true);
// console.log(!"javascript");


// practice extra

// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

// invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
// invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?




// json

// var text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// var obj = JSON.parse(text);
// console.log(obj);

// Array splice() Example


// let webDvlop = ["HTML", "CSS", "JS", "Bootstrap"];

// console.log(webDvlop);

// // Add 'React_Native' and 'Php' after removing 'JS'.
// let removed = webDvlop.splice(2, 1, 'PHP', 'React_Native')

// console.log(webDvlop);
// console.log(removed);

// // No Removing only Insertion from 2nd 
// // index from the ending
// webDvlop.splice(-2, 0, 'React')
// console.log(webDvlop)


// Here is another example of the Array splice() method.

// let languages = ['C++', 'Java', 'Html', 'Python', 'C'];

// console.log(languages);

// // Add 'Julia' and 'Php' after removing 'Html'.
// let removed = languages.splice(2, 1, 'Julia', 'Php')

// console.log(languages);
// console.log(removed);

// // No Removing only Insertion from 2nd index from the ending
// languages.splice(-2, 0, 'Pascal')
// console.log(languages)



// map()

// let arr1=[1,2,3];
// let mapArray=arr1.map((e)=>e*3);
// //map return a new array

// console.log(mapArray);


// forEach
// let arr2=[1,2,3];
// arr2.forEach((e)=>{
//     console.log(e*5);
// //does not create anything(array) or without creating a new array
// })


// While loop

// let j=0;
// while(j<1){
//     console.log(j);
//     j++;
// }

// How to make passing argument mandetory ?


// function check(){
//     throw new Error("param required");
// }

// function show(name=check()){
//     //Name is required
//     console.log(name);
// }
// show();




// Check if any student is fail

// const arr = [
//     { id: 42, marks: 66 },
//     { id: 67, marks: 53 },
//     { id: 35, marks: 23 }
// ];

// const PASSING_MARKS = 33;

// const isFailed = arr.some(function(element) {
//     return element.marks < PASSING_MARKS;
// });
// console.log(isFailed); // Should print true, as there is at least one student with marks less than 33.


// destructuring,rest operator

// const[X,...Y]=[1,2,3,4];
// console.log({X,Y});

// Insert  'Z' at 0 index
// const arr=["a","b","c"];

// arr.unshift('z')
// console.log(arr);

// or

// arr.splice(0,0,'z')

// console.log(arr);

// const arr1 =["hy"]
// const arr2 =["hello","code"]
// const arr3 =[...arr1,...arr2]
// console.log(arr3);

// Break Statement
// break statement is used to terminate the loop
// for (let i = 0; i <=5; i++) {
//     if(i===3){ break;
//     }
//     console.log(i);
    
// }

//continue 

//Q.......

// const obj={};
// const set1=new set();
// const set2=new set();

// set1.add(obj);
// set1.add(obj);

// set2.add({});
// set2.add({});

// console.log(set1.size);
// console.log(set2.size);



//write a function that return the longest word in the sentence.
// console.log(findLongestWord("I love coding in javascript"));


// function findLongestWord(sentence) {
//     let words = sentence.split(' ');
//     let longestWord="";
//     for(let word of words)
//     {
//         if(word.length>longestWord.length){
//             longestWord=word;
//      }

//         }
//         return  longestWord;

//       


//................Write a function that checks wheather the given string is a palindrome or not ?


//a palindrome is a word that reads the same forward and backword

//check for palindrome
// console.log(isPalindrome("racecar"));

// function isPalindrome(str){
//     //step 1:Reverse the string
//     const reversedStr=str.split("").reverse().join("");
//     //step 2:check if the reversed string is equal to the original string   

//     return str===reversedStr;
// }


//..............Async and await...............

// async function fetchData() {
//     try {
//       const data = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve("Data loaded successfully");
//         }, 2000);
//       });
//       console.log(data);  // "Data loaded successfully"
//     } catch (error) {
//       console.error(error);
//     } finally {
//       console.log("Operation complete");
//     }
//   }
  
//   fetchData();


  //............promise............

//   const fetchData = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Data loaded successfully");
//       }, 1000);
//     });
//   };
  
//   fetchData()
//     .then(data => console.log(data))  // "Data loaded successfully"
//     .catch(error => console.error(error))
//     .finally(() => console.log("Operation complete"));
  
  

 

