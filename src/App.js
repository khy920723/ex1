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

let defaultVideos=JSON.parse(sessionStorage.getItem('defaultVideos')) || null;
let selectedWatch=JSON.parse(sessionStorage.getItem('selectedWatch')) || null;


function App({youtube}) {
  const [videoItems, setVideoItems] = useState([]);
  const [selectView, setSelectView] = useState(null);
  

  // VideoView 컴포넌트
  const selectVideo = (video) => {
     // 비디오가 받아지면 setSelectView 메서드로 state 값 받아진 비디오로 업데이트
    setSelectView(video);
    selectedWatch = video;
    // console.log(video);
  }


  // searchbar 컴포넌트들 사용
  const search = (searchValueTxt) => {
    // 검색 후 다시 list-h로 돌아와야 되므로
    setSelectView(null);
    youtube
    .searchResult(searchValueTxt)
    .then(videos => setVideoItems(videos))
  }

  // videolist 컴포넌트들에서 사용
  // ,[] 한 번만 콜
  useEffect(()=>{    
      youtube
      .mostPopular()
      .then(videos=>{setVideoItems(videos); defaultVideos=videos})
  },[])


  // clickLogo
  const clickLogo=()=>{
    setVideoItems(defaultVideos);
  }

  useEffect(()=>{
    sessionStorage.setItem('defaultVideos',JSON.stringify(defaultVideos));
    sessionStorage.setItem('selectedWatch',JSON.stringify(selectedWatch));
  },[selectView])


  return (
  <div className="App">
    <BrowserRouter>
      <SearchBar searchResult={search} clickLogo={clickLogo} />
      <Routes>
        <Route path="/" element={<Home videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView} />} />
        <Route path="/search" element={<Search videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView} />} />
        <Route path="/watch" element={<Watch videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView} selectedWatch={selectedWatch} />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
