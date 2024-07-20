// Array destructuring in JavaScript allows you to extract values from arrays and assign them to variables in a concise and readable manner. This feature is part of ES6 (ECMAScript 2015).

//01.simple destucturing

// const numbers = [1, 2, 3];
// const [first, second, third] = numbers;
// console.log(first);  // 1
// console.log(second); // 2
// console.log(third);  // 3

//02.skipping items

// const numbers=[1,2,3]
// const[first, , third]=numbers
// console.log(first);//1
// console.log(third);//3

//03.Default Values:

//You can assign default values to variables in case the array does not have enough elements.

// const numbers = [1];
// const [first, second = 2] = numbers;
// console.log(first);  // 1
// console.log(second); // 2 (default value)

//04.Destructuring with Rest Operator:


// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;
// console.log(first);  // 1
// console.log(second); // 2
// console.log(rest);   // [3, 4, 5]

//05. Swapping Variables:

// Destructuring can be used to swap values between variables without needing a temporary variable.

// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a); // 2
// console.log(b); // 1


// 06..Nested Destructuring:
// You can destructure nested arrays as well.

// const numbers = [1, [2, 3], 4];
// const [first, [second, third], fourth] = numbers;
// console.log(first);  // 1
// console.log(second); // 2
// console.log(third);  // 3
//console.log(fourth); // 4



//Practical Example
//Array destructuring is often used in function parameters to handle arrays more easily.

// function getCoordinates() {
//     return [1, 2, 3];
// }

// const [x, y, z] = getCoordinates();
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 3

