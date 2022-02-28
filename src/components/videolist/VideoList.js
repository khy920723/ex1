import React from "react";
import Video from "../video/Video";
import './videolist.css'

function VideoList(props){
    return(
        <ul className="videolist">
            {
                props.videoItems.map(videoItem => (
                    <Video 
                    videoItem={videoItem
                    } 
                    key={videoItem.etag} 
                    // 한 번 더 프롭스로 내려줌
                    onVideoClick={props.onVideoClick}
                    display={props.display}
                    />
                ))
            }
        </ul>
    )
}

export default VideoList;