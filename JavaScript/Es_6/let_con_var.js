// 01.var
// Function-scoped or globally-scoped.
// Can be re-declared and updated.
// Hoisted to the top of their scope and initialized with undefined.

// Example of var
// function exampleVar() {
//     var x = 10;
//     if (true) {
//         var x = 20; // same variable!
//         console.log(x); // 20
//     }
//     console.log(x); // 20
// }

// exampleVar();


// 02.let
// Block-scoped.
// Can be updated but not re-declared within the same scope.
// Hoisted to the top of their block but not initialized.

// Example of let
// function exampleLet() {
//     let x = 10;
//     if (true) {
//         let x = 20; // different variable
//         console.log(x); // 20
//     }
//     console.log(x); // 10
// }

// exampleLet();


//03.const
// Block-scoped.
// Cannot be updated or re-declared.
// Hoisted to the top of their block but not initialized.
// Must be initialized during declaration.


// Example of const
// function exampleConst() {
//     const x = 10;
//     if (true) {
//         const x = 20; // different variable
//         console.log(x); // 20
//     }
//     console.log(x); // 10
// }
// exampleConst();


//04. Create an Array:

// const cars = ["Saab", "Volvo", "BMW"];

// // Change an element:
// cars[0] = "Toyota";

// // Add an element:
// cars.push("Audi");
// console.log(cars);


// //05. You can create a const object:
// const car = {type:"Fiat", model:"500", color:"white"};

// // You can change a property:
// car.color = "red";

// // You can add a property:
// car.owner = "Johnson";
// console.log(car);



//06.Differences in Hoisting
//var
//Variables declared with var are hoisted to the top of their function scope and initialized with undefine

// function hoistingVar() {
//     console.log(a); // undefined
//     var a = 5;
//     console.log(a); // 5
// }

// hoistingVar();


//07.let and const
// Variables declared with let and const are also hoisted but not initialized. Accessing them before declaration results in a ReferenceError.

// function hoistingLetConst() {
//     // console.log(a); // ReferenceError: Cannot access 'a' before initialization
//     let a = 5;
//     console.log(a); // 5

//     // console.log(b); // ReferenceError: Cannot access 'b' before initialization
//     const b = 10;
//     console.log(b); // 10
// }

// hoistingLetConst();



// Scoping Differences
// var
// var is function-scoped or globally-scoped, meaning it's accessible outside the block in which it is defined.


// function varScope() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x); // 10 (accessible outside the block)
// }

// varScope();

// let and const
// let and const are block-scoped, meaning they're only accessible within the block in which they are defined.


// function letConstScope() {
//     if (true) {
//         let x = 10;
//         const y = 20;
//        // console.log(x);
//     }
//     // console.log(x); // ReferenceError: x is not defined
//     // console.log(y); // ReferenceError: y is not defined
// }

// letConstScope();
