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


//let webDvlop = ["HTML", "CSS", "JS", "Bootstrap"];

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



//map()

// let arr1=[1,2,3];
// let mapArray=arr1.map((e)=>e*3);
// //map return a new array

// console.log(mapArray);


//forEach
// let arr2=[1,2,3];
// arr2.forEach((e)=>{
//     console.log(e*5);
// //does not create anything(array) or without creating a new array
// })


//While loop

// let j=0;
// while(j<1){
//     console.log(j);
//     j++;
// }













