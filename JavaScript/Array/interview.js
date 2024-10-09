//Here are some JavaScript coding interview questions based on the differences between == (loose equality) and === (strict equality):


//1....What will the following code output and why?
// console.log(0 == false);
// console.log(0 === false);
// console.log('' == false);
// console.log('' === false);

// 0 == false → true (loose equality performs type coercion, treating 0 as false)
// 0 === false → false (strict equality checks both value and type; different types)
// '' == false → true (empty string is coerced to false)
// '' === false → false (strict equality checks both value and type; different types)


//2.....Explain the difference between the following two comparisons:

// console.log('5' == 5);
// console.log('5' === 5);


// '5' == 5 → true (loose equality performs type coercion, converting '5' to 5)
// '5' === 5 → false (strict equality checks both value and type, and the types are different)



//3......What is the result of the following expressions, and why?

// console.log(null == undefined);
// console.log(null === undefined);


// null == undefined → true (loose equality considers null and undefined as equal without type coercion)
// null === undefined → false (strict equality checks both value and type, and the types are different)

//4........What will be the output of the following code, and why?

// console.log([1, 2] == "1,2");
// console.log([1, 2] === "1,2");


// [1, 2] == "1,2" → true (loose equality converts the array to a string, so both become "1,2")
// [1, 2] === "1,2" → false (strict equality checks value and type, and they are of different types)

//5.....What will the following expressions return?

// console.log(true == 1);
// console.log(true === 1);
// console.log(false == 0);
// console.log(false === 0);

//true == 1 → true (loose equality coerces true to 1)
// true === 1 → false (strict equality checks both value and type, and they are different)
// false == 0 → true (loose equality coerces false to 0)
// false === 0 → false (strict equality checks both value and type, and they are different)


//6..... What is the output of the following, and why?

// console.log([] == false);
// console.log([] === false);
// console.log([0] == false);
// console.log([0] === false);


// [] == false → true (loose equality coerces [] to an empty string "", and "" == false is true)
// [] === false → false (strict equality checks both value and type, and they are different)
// [0] == false → true (loose equality coerces [0] to 0, and 0 == false is true)
// [0] === false → false (strict equality checks both value and type, and they are different)


//7......What is the result of this comparison?
// console.log(NaN == NaN);
// console.log(NaN === NaN);

// NaN == NaN → false (by definition, NaN is not equal to anything, including itself)
// NaN === NaN → false (strict equality also follows the same rule; NaN is not equal to NaN)

//.....8......What does this output, and why?

// console.log({} == {});?
// 
// console.log({} === {});?

// { } == { } → false (loose equality checks by reference, and two different object references are not equal)
// { } === { } → false (strict equality also checks by reference, and two different object references are not strictly equal)

//9.......... What will be the result of the following code?

// let obj1 = { key: "value" };
// let obj2 = obj1;

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

// obj1 == obj2 → true (both obj1 and obj2 point to the same object reference)
// obj1 === obj2 → true (strict equality also checks the reference, and both point to the same reference)


//10......What will be the output of the following code, and why?

// console.log(null == 0);
// console.log(null === 0);

// null == 0 → false (null is only loosely equal to undefined, not to other values)
// null === 0 → false (strict equality checks both value and type, and they are different)















//.........LET , CONST & VAR

//1....Question: What will the following code output and why?

// function testVar() {
//     var x = 1;
//     if (true) {
//       var x = 2;  // Same variable!
//       console.log(x);  // Output?//2
//     }
//     console.log(x);  // Output?//2
//   }
//   testVar();
  

  //Inside the if block, var does not have block scope, so the same variable x is redeclared.

  //2. Question: What will the following code output and why?

//   function testLet() {
//     let x = 1;
//     if (true) {
//       let x = 2;  // Different variable (block-scoped)
//       console.log(x);  // Output?
//     }
//     console.log(x);  // Output?
//   }
//   testLet();

//   let is block-scoped, so inside the if block, it creates a new variable x local to the block.
//   Output will be:
//   2
//   1

//.........3. Question: What will the following code output and why?


// function testHoisting() {
//     console.log(x);  // Output?
//     var x = 5;
//   }
//   testHoisting();
  

//   Variables declared with var are hoisted to the top, but they are initialized with undefined before assignment.

//Output will be

//undefined

//..........4. Question: What will the following code output and why?

// function testLetHoisting() {
//     console.log(x);  // Output?
//     let x = 5;
//   }
//   testLetHoisting();


//   let is also hoisted, but it is in the Temporal Dead Zone (TDZ) until it is initialized.
// Accessing x before initialization will result in a ReferenceError.
// Output:

// ReferenceError: Cannot access 'x' before initialization


//.....5. Question: What will the following code output and why?

// const a = 5;
// a = 10;  // What happens here?

// console.log(a);


// const creates a constant, which means you cannot reassign a new value after initialization.
// This will result in a TypeError:

// TypeError: Assignment to constant variable.


//........6. Question: What is the output of the following code?

// if (true) {
//     var x = 10;
//   }
//   console.log(x);  // Output?
  
//var is function-scoped or global-scoped, not block-scoped, so it is accessible outside the if block.

// Output will be:

// 10



//.....7. Question: What is the output of the following code?

// if (true) {
//     let y = 20;
//   }
//   console.log(y);  // Output?


  //let is block-scoped, so it is not accessible outside the if block.

  //output
  //ReferenceError: y is not defined

//   8. Question: What will the following code output and why?

// const obj = { name: "Alice" };
// obj.name = "Bob";
// console.log(obj);  // Output?



//With const, the reference to the object cannot change, but the properties of the object can still be modified.

//Output:

//{ name: "Bob" }


//.......9. Question: What is the output of this code and why?

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);  // What will this log?
//     }, 1000);
//   }
  

//   var is function-scoped, and the loop does not create a new scope for each iteration. By the time the setTimeout callbacks execute, i has been incremented to 3

//Output
// 3
// 3
// 3
//........10. Question: What is the output of this code and why?

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);  // What will this log?
//     }, 1000);
//   }
  
//   let is block-scoped, so a new i is created for each iteration of the loop. Each setTimeout will log the i value of its respective iteration.

//Output

// 0
// 1
// 2

//.........11. Question: What will the following code output and why?

// console.log(a);  // Output?
// let a = 5;

// let variables are hoisted but exist in the Temporal Dead Zone (TDZ) until the declaration is encountered. Accessing a before it's initialized throws a ReferenceError

//OUTPUT
// ReferenceError: Cannot access 'a' before initialization

// 12. Question: What will be the output of this code?

const x = 10;
if (true) {
  const x = 20;
  console.log(x);  // Output?
}
console.log(x);  // Output?


// const is block-scoped. The x inside the if block is a separate variable from the x outside.
// Output will be:

// 20
// 10