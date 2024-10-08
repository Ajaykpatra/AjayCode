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


