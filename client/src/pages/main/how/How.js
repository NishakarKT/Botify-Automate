import React from 'react';
import "./How.css";
// material-ui
import { Button } from '@material-ui/core';
// files
import * as files from "../../../constants/files";

function How() {
    return (
        <div className="how">
            <h1>How To Use ?</h1>
            <hr />
            <p>Download the "Listener" from the download link provided</p>
            <hr />
            <p>Extract the downloaded file</p>
            <hr />
            <p>Connect the Arduino Board to your PC</p>
            <hr />
            <p>Run the "Listener" using Nodemon for live data updates</p>
            <hr />
            <p>Sign-in/Sign-up with your Arduino Key</p>
            <hr />
            <p>You may now successfully monitor and control your Arduino based projects</p>
            <hr />
            <a className="how__downloadLink" href={files.listener} download><Button>Download Listener</Button></a>
        </div>
    );
};

export default How;
