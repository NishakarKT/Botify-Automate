import React, { useState, useEffect } from 'react';
import "./DataButtons.css";
// material-ui
import { Button } from "@material-ui/core";
// colors
import * as colors from "../../../../constants/colors";

let randomDataInterval = null;
let filling = false;

function DataButtons({ waterFlowSpeed, setTime, setWaterLevel, setStatusColor }) {
    const tankHeight = 100;
    const dangerLevel = 15;
    const alertLevel = 25;
    const cautionLevel = 35;
    const [randomDataStatus, setRandomDataStatus] = useState(false);
    const [randomButtonText, setRandomButtonText] = useState("Random Data");

    useEffect(() => {
        generateRandomData();
    }, [randomDataStatus, waterFlowSpeed]);

    const generateRandomData = (e) => {
        e?.preventDefault();
        if (waterFlowSpeed.change !== 0) {
            clearInterval(randomDataInterval);
        }
        if (randomDataStatus) {
            randomDataInterval = setInterval(() => {
                const now = new Date();
                setTime(time => [...time, now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()]);
                setWaterLevel(waterLevel => {
                    const newWaterLevel = waterLevel[waterLevel.length - 1];
                    if (newWaterLevel <= 10) filling = true;
                    else if (newWaterLevel >= tankHeight - 10) filling = false;
                    if (newWaterLevel <= dangerLevel || newWaterLevel >= (tankHeight - dangerLevel)) setStatusColor(colors.danger);
                    else if (newWaterLevel <= alertLevel || newWaterLevel >= (tankHeight - alertLevel)) setStatusColor(colors.alert);
                    else if (newWaterLevel <= cautionLevel || newWaterLevel >= (tankHeight - cautionLevel)) setStatusColor(colors.caution);
                    else setStatusColor(colors.normal);
                    if (filling) return [...waterLevel, newWaterLevel + Math.random() * 0.5 * waterFlowSpeed.value];
                    else return [...waterLevel, newWaterLevel - Math.random() * 0.5 * waterFlowSpeed.value];
                });
            }, 300);
            setRandomButtonText("Stop Random Data");
        }
        else {
            clearInterval(randomDataInterval);
            setRandomButtonText("Random Data");
        }
    };

    const randomDataHandler = () => {
        setRandomDataStatus(!randomDataStatus);
    };

    const resetData = () => {
        const now = new Date();
        setWaterLevel(waterLevel => [0]);
        setTime([now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()]);
    };

    return (
        <div className="dataButtons">
            <Button onClick={randomDataHandler}>{randomButtonText}</Button>
            <Button onClick={resetData}>Reset Data</Button>
        </div>
    );
};

export default DataButtons;
