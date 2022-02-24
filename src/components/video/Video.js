import React from "react";

function Video(props){
    return(
        <li>
            {
                props.videoItem.snippet.channelTitle
            }
        </li>
    )
}

export default Video;