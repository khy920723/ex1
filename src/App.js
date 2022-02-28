import './App.css';
import { useState, useEffect } from 'react';
import VideoList from './components/videolist/VideoList';
import SearchBar from './components/searchbar/SearchBar';
import VideoView from './components/videoview/VideoView'

function App() {
  // 변수로 환경변수의 API 키 받기 
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoItems, setVideoItems] = useState([]);
  const [selectView, setSelectView] = useState(null);

  // VideoView 컴포넌트
  const selectVideo=(video)=>{
    setSelectView(video); // 비디오가 받아지면 setSelectView 메서드로 state 값 받아진 비디오로 업데이트
  }

  // videolist 컴포넌트들에서 사용
  // ,[] 한 번만 콜
  useEffect(()=>{    
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      // 백틱 표현
      fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&key=${API_KEY}`, requestOptions)
        .then(response => response.json())
        // .then(result => console.log(result.items))
        .then(result => setVideoItems(result.items)) // items를 받아와 setVideoItems 전달
        .catch(error => console.log('error', error));
  },[])

  // searchbar 컴포넌트들 사용
  const search=(searchValueTxt)=>{
    // 검색 후 다시 list-h로 돌아와야 되므로
    setSelectView(null);
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&regionCode=kr&q=${searchValueTxt}&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      // 검색 결과가 새로운 videolist를 보여줘야되므로 set호출
      .then(result => setVideoItems(result.items))
      .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
    <SearchBar searchResult={search} />

    <div className="content"> 
    {
        selectView && (
          <div className='view'>
            <VideoView video={selectView} /> 
        </div>
        )}
    <div className='list'>
      <VideoList 
      videoItems={videoItems} 
      onVideoClick={selectVideo} 
      display={selectView ? 'rowlist':'collist'} />
    </div>
    </div>
  </div>
  );
}

export default App;
