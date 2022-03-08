import React from "react";
import './video.css';
import { Link } from "react-router-dom";
// 전체를 common이라는 이름으로 common.js의 function들을 전부 받아오는 것
import * as common from '../../common'


function Video({videoItem, onVideoClick, display, search}){
    const container='container';
    const displayClass=display==='rowlist' ? 'list-h':'list-v';

    return(
        <li className={`${container} ${displayClass} ${search ? 'search' : '' }`}>
            <Link to="/watch">
                <div className="video" onClick={()=>{onVideoClick(videoItem)}}>
                    <img className="thumnail" src={videoItem.snippet.thumbnails.high.url} alt="video thumnail" />
                    <div className="metadata">
                        <div className="channelImg">
                            <img className="channelImg-thum" src={videoItem.snippet.thumbnails.default.url} alt="video thumnail" 
                            />
                        </div>
                        <div>
                            <p className="title">{videoItem.snippet.title}</p>
                            <p className="channel">{videoItem.snippet.channelTitle}</p>
                            <p className="publishDate"> {common.publishDate(videoItem.snippet.publishedAt)}</p>
                            <p className="viewNum">댓글 {common.numberWithCommas(videoItem.statistics.commentCount)}개</p>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Video;