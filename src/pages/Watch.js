import React from "react";
import '../App.css';
import Menubar from "../components/menubar/Menubar";
import VideoList from "../components/videolist/VideoList";
import VideoView from "../components/videoview/VideoView";

const Watch=({videoItems, onVideoClick, selectView, selectedWatch})=>{
    return(
        <div className="content">
            <div className='view'>
                <VideoView video={selectedWatch} /> 
            </div>
            <div className='list'>
                <VideoList 
                videoItems={videoItems} 
                onVideoClick={onVideoClick} 
                display='rowlist' 
                />
            </div>
        </div>
    )
}

export default Watch;