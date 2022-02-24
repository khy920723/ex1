import './App.css';
import { useState, useEffect } from 'react';
import VideoList from './components/videolist/VideoList';


function App() {
  const [videoItems, setVideoItems] = useState([]);
  
  // ,[] 한 번만 콜
  useEffect(()=>{    
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=AIzaSyBjp0tpPVbVRQyTe23E0pfEYkkQLTWAdw0", requestOptions)
        .then(response => response.json())
        // .then(result => console.log(result.items))
        .then(result => setVideoItems(result.items)) // items를 받아와 setVideoItems 전달
        .catch(error => console.log('error', error));
  },[])

  return (
    <div className="App">
      <VideoList videoItems={videoItems} />
    </div>
  );
}

export default App;
