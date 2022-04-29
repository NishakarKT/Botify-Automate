import React from 'react'
import "./Loading.css";
// image sources
import * as images from "../../../constants/images";

function Loading() {
    return (
        <div className="loading">
            <img src={images.botifyLogo} alt="" />
        </div>
    )
}

export default Loading
