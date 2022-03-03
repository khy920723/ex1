import React from "react";
import './video.css';

function Video({videoItem, onVideoClick, display}){
    const container='container';
    const displayClass=display==='rowlist'? 'list-h':'list-v';

    return(
        <li className={`${container} ${displayClass}`}>
            <div className="video" onClick={()=>{onVideoClick(videoItem)}}>
                <img className="thumnail" src={videoItem.snippet.thumbnails.high.url} alt="video thumnail" alt="thumnail img" />
                <div className="metadata">
                    <p className="title">{videoItem.snippet.title}</p>
                    <p className="channelTitle">{videoItem.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
}

export default Video;