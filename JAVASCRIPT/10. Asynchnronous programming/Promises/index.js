// // 
// A Promise can be in one of three states:

// Pending: Initial state, neither fulfilled nor rejected.

// Fulfilled: The operation was completed successfully.

// Rejected: The operation failed.

let myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (replace with your actual logic)
  setTimeout(() => {
    if (Math.random() < 0.5) { 
      resolve('Success message'); 
    } else {
      reject('Error message'); 
    }
  }, 1000); // Simulate a delay of 1 second
});

// Consuming the Promise
myPromise
  .then(result => {
    console.log(result); // Output: "Success message" (or "Error message" depending on the random outcome)
  })
  .catch(error => {
    console.error(error); 
  });



  //NETFLIX

  function loginUser(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('we are logging in');
        resolve({ userEmail: email, password: password }); 
      }, 3000);
    });
  }
  
  function getAllVideos(userEmail, password) {
    return new Promise((resolve, reject) => {
      // Simulate fetching videos using user credentials (replace with actual API calls)
      setTimeout(() => {
        const videosInfoObj = { 
          videosInfo: [
            { title: "The Mandalorian", id: 1 },
            { title: "Stranger Things", id: 2 } 
          ] 
        }; 
        console.log('we have fetched videos');
        resolve(videosInfoOb); 
      }, 3000);
    });
  }
  
  function getVideoInfo(videosInfoObj) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const videoDetails = videosInfoObj.videosInfo[1]; // Access the desired video
        console.log('We have the details of one video:', videoDetails);
        resolve(videoDetails);
      }, 3000);
    });
  }
  
  loginUser("jay@duff.com", "1234rhgivshcbjk")
    .then(user => getAllVideos(user.userEmail, user.password))
    .then(videosInfoObj => getVideoInfo(videosInfoObj))
    .then(videoDetails => {
      console.log('Video Details:', videoDetails);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
