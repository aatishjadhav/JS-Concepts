// Concept var , let , const Difference
// 1. var is functionally or globally scoped
// 2. let & const are block scoped

// function add() {
//   var a = 20;
//   var isNum = true;
//   if (isNum) {
//     var a = 30;
//     console.log(a);
//   }
//   console.log(a);
// }

// add();

// var can be redeclared within its scope
// let and const cannot be redeclared within its scope
// if (c == 4) {
//   let c = 5;
//   let c = 6;
// }

// var and let are decalred without initialization
// const cannot be declared without initialization
// var age;
// let name;
// const num = 20;

// var and let can be updated
// const cannot be updated
// var name = "Amit";
// name = "Ria"

// let age = 19;
// age = 20;

// const marks = 70;
// marks = 80;

// Exercise: (Trick Question)
// we will change property of object not entire myData so we can change propert of object and arrays
// const myData = { name: "Akansha", hobby: "Painting" };
// myData.name = "Tanay";
// console.log(myData);

// This gives error because we try to change const
// myData = { name: "Tanay" };
// console.log(myData);

// const num = [1, 2, 3, 4, 5];
//  we cannot do this
// num = [4, 5, 6]
//  we can do this
// num[1] = 3;







//Concept Array Methods
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map method returns new array and methos chaining is possible
// let newArr = arr.map((num) => num + 1).filter((data) => data > 5);
// console.log(newArr);

//forEach does not return a new array and method chaining is not possible.
// arr.forEach((num) => {
//   console.log(num + 2);
// });


// Concept Hoisting
// console.log(age);
// var age = 20;

// above hoisting works like
// var age;
// console.log(age);
// age = 20;

// This gives error because we cannot access let before initialization
// console.log(marks);
// let marks = 10





// Concept == and ===
// === checks both the value and type means wheather its string or numeric value or not
// == checks only the value is same or not || converts the operands to the same type and then compares them.
let a = 10;
let b = "10"
console.log(a == b); // true
console.log(a === b); // false
