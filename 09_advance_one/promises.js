const promiseOne = new Promise(function (resolve, reject) {
  // Do an asynce task
  // DB calls, cryptography, network related call
  setTimeout(function () {
    console.log(`Async task is complete`);
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asynce task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Asynce task 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Janhvi", emial: "abc@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "john", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  }).finally(() => {
    console.log("The promise is either resolve or rejected");
  })

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function () {
        let error = true;
        // let error = false;
        if (!error) {
          resolve({ username: "javascript", password: "123" });
        } else {
          reject("ERROR: JS went wrong");
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
         console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllusers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log(`E: ${error}`);
//   }
// }

// getAllusers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

fetch('https://api.github.com/users/Janhvi-Kesharvani')
.then((response) => {
   return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))