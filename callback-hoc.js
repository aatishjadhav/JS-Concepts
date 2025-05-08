// const greetUser = (username, callback) => {
//   const message = "Good Morning " + username;
//   callback(message);
// };

// const logMessage = (message) => {
//   console.log(message);
// };

// greetUser("Atish", logMessage);


// Higher-order function that satisfy both conditions
const greetUser = (callback) => {
    return function (username) {
      const message = "Good Morning " + username;
      callback(message);
    };
  };
  
//    Normal callback function
  const logMessage = (message) => {
    console.log(message);
  };
  
//    Use the higher-order function
  const greet = greetUser(logMessage);  // returns a new function
  greet("Atish");  // Call the returned function
  

 // example of hoc that takes functiona as param and also returns new function
// const sayHello = (name) => {
//   console.log("Hello, " + name);
// };

// const addGreeting = (func) => {
//   return (name) => {
//     console.log("Welcome!"); // Greeting before the actual function
//     func(name); // Call the original function
//   };
// };

// const greetWithMessage = addGreeting(sayHello);
// greetWithMessage("Atish");
