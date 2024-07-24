//SPREAD OPERATOR
//The spread operator(...) is used to expand or spread elements from an iterable(such as an array,string or objects) into indivisual elements.

//01.copying arrays

//The spread operator can create a shallow copy of an array

// const originalArray = [1, 2, 3];
// const copyArray = [...originalArray];
// console.log(copyArray); // [1, 2, 3]

//02.Merging Arrays:

//It can be used to merge multiple arrays into one.

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];
// console.log(mergedArray);
 // [1, 2, 3, 4, 5, 6]

 //03.Spreading Elements in Function Calls:

 //The spread operator can spread elements of an array as arguments to a function

//  function add(a,b,c){
//     return(a+b+c);
//  }
//  const numbers=[1,2,3];
//  const sum=add(...numbers);
//  console.log(sum);

//04.Creating New Objects:

//The spread operator can be used to create a shallow copy of an object or merge multiple objects.

// const obj1={a:1,b:2};
// const obj2={c:3,d:4};
// const mergeobj={...obj1,...obj2};
// console.log(mergeobj);

//05.Opdating object
//It can be used to update or add properties to an object.

// const original={a:1,b:2};
// const update={...original,b:4,c:5};
// console.log(update);








