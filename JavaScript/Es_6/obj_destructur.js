//OBJECT DESTUCTURING
// Object destructuring in JavaScript is a powerful feature that allows you to extract properties from objects and assign them to variables in a concise and readable manner.

//Basic Object Destructuring

// const person = {
//     name: 'Alice',
//     age: 25,
//     city: 'Wonderland'
// };

// // Destructuring assignment
// const { name, age, city } = person;

// console.log(name); // Alice
// console.log(age);  // 25
// console.log(city); // Wonderland



// Destructuring with Default Values
// If a property does not exist on the object, you can provide a default value.


// const person = {
//     name: 'Alice',
//     age: 25
// };

// // Destructuring with a default value
// const { name, age, city = 'Unknown' } = person;

// console.log(name); // Alice
// console.log(age);  // 25
// console.log(city); // Unknown


//Renaming Variables
//You can rename the variables that the properties are assigned to.


// const person={
//     name:'Ajay',
//     age:24
// }
// const{name:personName,age:personAge}=person;
// console.log(personAge);
// console.log(personName);


//Nested object
//a nested object is an object that contains another object as a property. This allows for creating complex data structures that can represent real-world entities with multiple levels of detail. Nested objects are commonly used to model data with hierarchical relationships.


//Example

// const person = {
//     name: 'Ajay',
//     age: 24,
//     address: {
//         street: 'salt road',
//         city: 'Balasore',
//         zip: '756002'
//     },
//     contact: {
//         email: 'ajay@gmail.com',
//         phone: '6370064885'
//     }
// };

// console.log(person);

// Nested Object Destructuring
// You can destructure nested objects as well.

// const person = {
//         name: 'Ajay',
//         age: 24,
//         address: {
//             street: 'salt road',
//             city: 'Balasore',
//             zip: '756002'
//         },
//         contact: {
//             email: 'ajay@gmail.com',
//             phone: '6370064885'
//         }
//     };
//     const{name,address:{street,city,zip},contact:{email,phone}}=person;
// //console.log(age);//showing error (age is not defined)
// console.log(name);
// console.log(city);
// console.log(phone);



// Destructuring in Function Parameters
// Object destructuring can be used directly in function parameters to extract values from objects passed as arguments.

// const person = {
//     name: 'Alice',
//     age: 25,
//     city: 'Wonderland'
// };

// function greet({ name, age, city }) {
//     console.log(`Hello, my name is ${name}, I am ${age} years old and I live in ${city}.`);
// }

// greet(person); // Hello, my name is Alice, I am 25 years old and I live in Wonderland.


// Combining with Arrays
// You can also destructure objects inside arrays or vice versa.


// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 }
// ];

// // Destructuring objects inside an array
// const [person1, person2] = people;
// const { name: name1, age: age1 } = person1;
// const { name: name2, age: age2 } = person2;

// console.log(name1, age1); // Alice 25
// console.log(name2, age2); // Bob 30
