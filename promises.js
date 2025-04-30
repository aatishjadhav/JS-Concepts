// creating a promise
// let orderFood = new Promise((resolve, reject) => {
//   let foodDelivered = true;

//   if (foodDelivered) {
//     resolve("Food arrival successfull");
//   } else {
//     reject("Sorry, food was not delivered.");
//   }
// });

// console.log(orderFood);

// handle a promise
// orderFood
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // you have fetched data here
    return response.json();
  })
  .then((data) => {
    // you can use the fetched data here
    console.log(data);
  })
    .catch((error) => {
    // you have some error with data fetching
    console.log("something went wrong", error);
  });
