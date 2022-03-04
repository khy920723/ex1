import React from "react";
import '../App.css';
import Menubar from "../components/menubar/Menubar";
import VideoList from "../components/videolist/VideoList"; 
import VideoView from "../components/videoview/VideoView";

const Home=({videoItems, onVideoClick, selectView})=>{
    return(
        <div className="contents-wrap">
            <div className="sidebar">
                <Menubar />
            </div>
            <div className="content"> 
                <div className='list'>
                    <VideoList 
                    videoItems={videoItems} 
                    onVideoClick={onVideoClick} 
                    display='collist' />
                </div>
            </div>
            {/* e: content */}
        </div>
    )
}

export default Home;