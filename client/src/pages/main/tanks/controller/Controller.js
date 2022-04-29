import React, { useState } from 'react';
import "./Controller.css";
// material-ui
import { Button } from '@material-ui/core';
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
// components
import DataButtons from '../dataButtons/DataButtons';
import ActiveSwitch from '../activeSwitch/ActiveSwitch';

function Controller({ arduinoAccess, activeStatus, setActiveStatus, time, setTime, waterLevel, setWaterLevel, setStatusColor }) {
    const [waterFlowSpeed, setWaterFlowSpeed] = useState({ value: 1, change: 0 });
    const waterFlowSpeedChangeHandler = (order) => {
        const target = document.getElementById("controller__waterFlowSpeedInput");
        if (order === "incr" && target.value <= 9)
            setWaterFlowSpeed({ value: Number(target.value) + 1, change: 1 });
        else if (order === "decr" && target.value >= 2)
            setWaterFlowSpeed({ value: Number(target.value) - 1, change: -1 });
    };
    return (
        <div className="controller">
            <DataButtons waterFlowSpeed={waterFlowSpeed} setTime={setTime} setWaterLevel={setWaterLevel} setStatusColor={setStatusColor} />
            <div className="controller__input">
                <label>Wate Flow Speed (1-10)</label>
                <input type="number" min="1" max="10" id="controller__waterFlowSpeedInput" value={waterFlowSpeed.value} disabled />
                <div className="controller__buttonsBox">
                    <Button onClick={() => waterFlowSpeedChangeHandler("incr")}><TrendingUpRoundedIcon /></Button>
                    <Button onClick={() => waterFlowSpeedChangeHandler("decr")}><TrendingDownRoundedIcon /></Button>
                </div>
            </div>
            <div className="controller__input">
                <label>Water Level</label>
                <input type="number" min="0" max="100" value={waterLevel} disabled />
            </div>
            <div className="controller__input">
                <label>Time</label>
                <input type="text" value={time} disabled />
            </div>
            {arduinoAccess ?
                <div className="controller__switch">
                    <ActiveSwitch arduinoAccess={arduinoAccess} arduinoKey={"myArduino"} activeStatus={activeStatus} setActiveStatus={setActiveStatus} />
                    <h1>* WARNING *</h1>
                    <p>This switch is directly linked to your tank.</p>
                    <p>If you wish to pause the "Random Data", if active, then click on "Stop Random Data" button at the top.</p>
                </div>
                : null}
        </div>
    );
};

export default Controller;
