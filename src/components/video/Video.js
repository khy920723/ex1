import React from "react";
import './video.css';

function Video(props){
    return(
        <li className="videoContainer">
            <div className="video">
                <img className="thumimg" src={props.videoItem.snippet.thumbnails.high.url} alt="video thumnail" alt="thumnail img" />
                <div className="titledate">
                    <p className="title">{props.videoItem.snippet.title}</p>
                    <p className="channelTitle">{props.videoItem.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
}

export default Video;