import React from "react";
import './video.css';

function Video(props){
    const container='container';
    const displayClass=props.display==='rowlist'? 'list-h':'list-v';

    return(
        <li className={`${container} ${displayClass}`}>
            <div className="video" onClick={()=>{props.onVideoClick(props.videoItem)}}>
                <img className="thumnail" src={props.videoItem.snippet.thumbnails.high.url} alt="video thumnail" alt="thumnail img" />
                <div className="metadata">
                    <p className="title">{props.videoItem.snippet.title}</p>
                    <p className="channelTitle">{props.videoItem.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
}

export default Video;