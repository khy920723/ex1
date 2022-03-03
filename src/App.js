import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// 컴포넌트들
import VideoList from './components/videolist/VideoList';
import SearchBar from './components/searchbar/SearchBar';
import VideoView from './components/videoview/VideoView';
// 라우터들
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';


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
      fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=30&regionCode=KR&key=${API_KEY}`, requestOptions)
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
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&regionCode=kr&q=${searchValueTxt}&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      // 비디오 아이디를 id라는 변수로 사용하기 위해 변환
      .then(result => result.items.map(item=>({...item, id:item.id.videoId})))
      // 검색 결과가 새로운 videolist를 보여줘야되므로 set호출
      .then(items => setVideoItems(items))
      .catch(error => console.log('error', error));
  }

  return (
  <div className="App">
    <BrowserRouter>
      <SearchBar searchResult={search} />
      <Routes>
        <Route path='/' element={<Home videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView} />} />
        <Route path='/search' element={<Search videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView} />} />
        <Route path='/watch' element={<Watch videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView} />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
