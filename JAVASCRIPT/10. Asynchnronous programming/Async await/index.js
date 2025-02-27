async function playBackVideo() {
  try {
    const user = await loginUser("job@gmail.com", "kjbfdkvhjcxvhjx");
    console.log("Logged into Netflix", user);

    const watchedVideos = await recentlWatchedVideos(user);
    console.log("We have all recently watched videos", watchedVideos);

    const selectedVideo = watchedVideos[videoIndex]; // Access the desired video after fetching watchedVideos
    const selectedVideoDetails = await getVideoDetails(selectedVideo);
    console.log("Data of recently watched video:", selectedVideoDetails);

    const stoppingTime = await getStoppingTime(selectedVideoDetails);
    console.log(`The stopping time of: ${stoppingTime.video} is ${stoppingTime.stopping}`);

    renderVideo(selectedVideoDetails, stoppingTime); 
  } catch (error) {
    console.error("An error occurred:", error);
  }
}






//using promises to fetch data 


const promise = fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((jsonData) => console.log(jsonData));


// using async await

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const dataJson = await response.json();
    console.log(dataJson);
  } catch (error) {
    console.error(error.message);
  }
}
