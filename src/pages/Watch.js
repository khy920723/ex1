import React from "react";
import '../App.css';
import Menubar from "../components/menubar/Menubar";
import VideoList from "../components/videolist/VideoList";
import VideoView from "../components/videoview/VideoView";

const Watch=({videoItems, onVideoClick, selectView})=>{
    return(
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
                onVideoClick={onVideoClick} 
                display={selectView ? 'rowlist':'collist'} />
            </div>
        </div>
    )
}

export default Watch;