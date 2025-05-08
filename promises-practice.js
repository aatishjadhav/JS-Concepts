// Practice Set 1

// Question-1

// const fetchData = new Promise((resolve, reject) => {
// 	let dataReceived = true
//   if(dataReceived){
//     resolve("Data fetched successfully!");
//   } else {
//     reject("Failed to fetch data")
//   }
// });

// fetchData.then((message) => {
//   console.log(message);
// }).catch((error) => {
//   console.log(error);
// });

// Question-2

// const checkNumber = new Promise((resolve, reject) => {
//     let num = 8
//     if (num > 10) {
//       resolve("Number is valid");
//     } else {
//       reject("Number is too small");
//     }
// });

// checkNumber.then((message) => {
// 	console.log(message)
// }).catch((error) => {
//   console.error(error);
// });

// Question-3
// const isLoggedIn = true;

// const loginCheck = new Promise((resolve, reject) => {
//   if (isLoggedIn) {
//     resolve("User is logged in");
//   } else {
//     reject("User is not logged in");
//   }
// });

// loginCheck.then((message) => {
// 	console.log(message)
// }).catch((error) => {
//   console.error(error);
// });

// Question-4

// const userExists = true;

// const fetchUser = new Promise((resolve, reject) => {
//   if (userExists) {
//     resolve({ name: "Alice", age: 25 });
//   } else {
//     reject("User not found");
//   }
// });

// fetchUser
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Question-5

// const fetchNumber = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(42);
//     }, 2000);
//   });

//   fetchNumber.then((number) => {
//     console.log(number);
//   });

// Question-6
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(500);
//   }, 3000);
// });

// promise
//   .then((number) => {
//     console.log(number);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Question-7

// const checkPassword = (password) => {
//     return new Promise((resolve, reject) => {
//       if (password === "12345") {
//         resolve("Password accepted");
//       } else {
//         reject("Invalid password");
//       }
//     });
//   };

//   checkPassword("12345").then((message) => console.log(message)).catch((error) => console.log(error))

// Question-8

// const checkEmail = (email) => {
//   return new Promise((resolve, reject) => {
//     if (email.includes("@")) {
//       resolve("Valid email");
//     } else {
//       reject("Invalid email");
//     }
//   });
// };

// checkEmail("test@example.com").then((message) => console.log(message)).catch((error) => console.log(error));

// Question-9

// const fetchTemperature = (temperature) => {
//     return new Promise((resolve, reject) => {
//       if (temperature > 15) {
//         resolve("Temperature is 20°C");
//       } else {
//         reject("Temperature too low");
//       }
//     });
//   };

// fetchTemperature(20).then((message) => console.log(message)).catch((error) => console.log(error));

// Question 1
// Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout.

// const delayedGreeting = () => {
//     setTimeout(() => {
//       console.log('Hello, welcome to my portfolio!');
//     }, 2000);
//   }
  
//   delayedGreeting();
 
// Question 2
// Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout.

// const delayedAddition = (num1, num2) => {
//     setTimeout(() => {
//       console.log(num1 + num2);
//     }, 4000);
//   };
  
//   delayedAddition(2, 3);

// Question 3
// Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout.

// const delayedAlert = (msg, delay) => {
//     setTimeout(() => {
//       alert(msg);
//     }, delay);
//   }
  
//   delayedAlert('Hello, world!', 2000);

// Question 4
// Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided.
// const fakeFetch = (msg, shouldSucceed) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (shouldSucceed) {
//           resolve(`message from server: ${msg}`);
//         }
//         reject(`error from server: ${msg}`);
//       }, 3000);
//     });
//   };
  
//   fakeFetch("Hi", true)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
  

// Question 5
