import React from "react";
import './video.css';
import { Link } from "react-router-dom";

function Video({videoItem, onVideoClick, display}){
    const container='container';
    const displayClass=display==='rowlist'? 'list-h':'list-v';

    return(
        <li className={`${container} ${displayClass}`}>
            <Link to="/watch">
                <div className="video" onClick={()=>{onVideoClick(videoItem)}}>
                    <img className="thumnail" src={videoItem.snippet.thumbnails.high.url} alt="video thumnail" alt="thumnail img" />
                    <div className="metadata">
                        <div className="channelImg">
                            <img className="channelImg-thumb" src={videoItem.snippet.thumbnails.default.url} />
                        </div>
                        <div>
                            <p className="title">{videoItem.snippet.title}</p>
                            <p className="channelTitle">{videoItem.snippet.channelTitle}</p>
                            <p className="commentCount">댓글: {videoItem.statistics.commentCount} 개</p>
                            <p className="viewCount">조회수: {videoItem.statistics.viewCount} 회</p>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Video;