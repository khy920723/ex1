import React from "react";
import '../App.css';
import Menubar from "../components/menubar/Menubar";
import VideoList from "../components/videolist/VideoList";
import VideoView from "../components/videoview/VideoView";

const Search=({videoItems, onVideoClick, selectView})=>{
    return(
        <div className="contents-wrap">
        <div className="sidebar">
            <Menubar />
        </div>
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
    </div>
    )
}

export default Search;