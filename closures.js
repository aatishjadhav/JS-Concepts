// Closures
// A closure is the combination of a function and the lexical environment within which that function was declared.
// A closure is a function that remembers the variables from the place where it was created.

// function outerFunction() {
//   let outerVariable = "Red";

//   function innerFunction() {
//     console.log(outerVariable);
//   }
//   return innerFunction;
// }

// let closureFunc = outerFunction();
// closureFunc();

// function counter() {
//   let count = 0;

//   function innerCountFunc() {
//     count++;
//     console.log(count);
//   }
//   return innerCountFunc;
// }

// let myCounter = counter();
// myCounter();
// myCounter();