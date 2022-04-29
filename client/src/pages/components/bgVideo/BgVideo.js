import React, { useEffect } from 'react';
import "./BgVideo.css";

function BgVideo({ videoId, videoSrc, playbackSpeed }) {
    useEffect(() => {
        document.getElementById(videoId).playbackRate = playbackSpeed;
    }, []);
    return (
        <div className="bgVideo">
            <video id={videoId} autoPlay muted loop>
                <source src={videoSrc} type="video/mp4" />
            </video>
        </div>
    );
};

export default BgVideo;
