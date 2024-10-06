//let , const , var ?
// if (true) {
//     var x = 1;  // function//global scoped
//     let y = 2;  // block scoped
//     const z = 3;  // block scoped and can't be reassigned
// }
// console.log(x);  // 1 (var is accessible outside the block)
// console.log(y);  // Error: y is not defined (let is block-scoped)
// console.log(z);  // Error: z is not defined (const is block-scoped)


//........Hoisting variables
//using var

// console.log(x);
// var x=10;
// console.log(x);


//Internally, the code is interpreted like this:

// var x;       // Declaration is hoisted
// console.log(x); // undefined
// x = 5;       // Initialization happens here
// console.log(x); // 5


//Using let and const

// console.log(y);// ReferenceError: Cannot access 'y' before initialization
// let y = 10;


//.... Hoisting of Function Declarations

//Function declarations are fully hoisted, meaning both the function's name and its body are moved to the top of the scope.
// greet();//Hello 😒
// function greet(){
//     console.log("Hello 😒")
// }

//........Hoisting of Function Expressions

// console.log(greet);//undefined
// var greet=function(){
//     console.log("Hello😒");
    
// }


// //Internally, it behaves like this:
// var greet;
// console.log(greet); // undefined
// greet = function() {
//   console.log("Hello");
// };


// console.log(a); // undefined (var is hoisted)
// var a = 10;

// console.log(b); // ReferenceError (let is hoisted but not initialized)
// let b = 20;

// greet();  // "Hello" (function declaration is fully hoisted)
// function greet() {
//   console.log("Hello");
// }

// sayHi();  // TypeError: sayHi is not a function (function expression is not hoisted)
// var sayHi = function() {
//   console.log("Hi");
// };


