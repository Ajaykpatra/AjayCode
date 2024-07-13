//Array

// const myArr = [1,2,3,4435,52345,63635646]
// const myArr2 = new Array(1,23,2,4,3)

// console.log(myArr[3]);

//........Array Method ...........

//...........IndexOf()
// Get the indexof specified element of an array

// const array =[1,2,3,4,5]

// let a=array.indexOf(4);
// console.log(a);

//.........Find ()
//get the first element that satisfy a condition

// const array =[1,2,3,4,5]
// let a = array.find((num)=>num%2===0);
// console.log(a);

//........Filter
//filter the array based on condition,or get an array of elements that satisfy the condition 

// const array =[1,2,3,4,5]
// let a = array.filter((num)=>num%2===0);
// console.log(a);


//..........slice
//get a subset of a array from start index to end index(end not include)

// const array=["a","b","c","d","e"]
// let a=array.slice(2,4)
// console.log(a);

//.....push()
//add the given element at the end of the array

// let array = [1,2,3,4]
// array.push(9,8),
// console.log(array);

// ........concat()
//Adding array into single array or create a new array and not modify the original array
// let array1=[1,2,3,4,5]
// let array3=array1.concat(9,8);

// //create a new array
// console.log(array3);
// //not modify the original array
// console.log(array1);


//........unshift
 //add the given element at the start of the array

// let array = [1,2,3,4]
// let unshifted=array.unshift(7);
// console.log(unshifted);
// console.log(array);

//......pop()
//remove the last element of the array

// let array = [1,2,3,4]
//  let poped=array.pop();
//  console.log(poped);
//  console.log(array);



// .........shift()
// remove first element of the array

//  let shift = [1,2,3,4]
//  let shifted=array.pop();
//  console.log(shift);
//  console.log(array);

//.......splice(
//splice() is used to add ,romove or replace elements in an array



// let letters=['a','b','c','d','e']
// //add x and y at index 1
// letters.splice(1,0,'x','y')
// console.log(letters);

// //remove 1 element starting from index 1

// letters.splice(1,1)
// console.log(letters);

// //replace the element at index 3 with z

// letters.splice(3,1,'z')
// console.log(letters);


//......map()

//modify each element of an array
//map returns a new array

// let array=[1,2,3]
// let mapArray=array.map((e)=>e*5);
// console.log(mapArray);

//............forEach()

//The forEach() method calls a function and iterates over the elements of an array. The forEach() method can also be used on Maps and Sets.

// let students = ['John', 'Sara', 'Jack'];

// // using forEach
// students.forEach(myFunction);

// function myFunction(item) {

//     console.log(item);
// }








