//a callback function - used to handle tasks like reading files,making network requests, processing data

// function addCallBack(z, callbackfn){

// return callbackfn(z, 6)

// }

// addCallBack(10, add)

// //1. login to netflix
// 2. get all details
// 3. get one video from all the video
// 4. get the details of that video



function loginUser(email, password, callbackfn) {
  setTimeout(() => {
    console.log('we are logging in');
    callbackfn({ userEmail: email, password: password }); // Pass the user object
  }, 3000);
}

function getAllVideos(userEmail, password, callbackfn) {
  // Simulate fetching videos using user credentials (replace with actual API calls)
  setTimeout(() => {
    const videosInfoObj = { 
      videosInfo: [
        { title: "The Mandalorian", id: 1 },
        { title: "Stranger Things", id: 2 } 
      ] 
    }; 
    console.log('we have fetched videos');
    callbackfn(videosInfoObj); 
  }, 3000);
}

function getVideoInfo(videosInfoObj, callbackfn) {
  setTimeout(() => {
    const videoDetails = videosInfoObj.videosInfo[1]; // Access the desired video
    console.log('We have the details of one video:', videoDetails);
    callbackfn(videoDetails);
  }, 3000);
}

loginUser("jay@duff.com", "1234rhgivshcbjk", (user) => {
  getAllVideos(user.userEmail, user.password, (videosInfoObj) => {
    getVideoInfo(videosInfoObj, (videoDetails) => {
      console.log('Video Details:', videoDetails); 
    });
  });
});







///USING PROMISES



