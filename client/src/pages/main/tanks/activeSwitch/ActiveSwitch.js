import React, { useState, useEffect } from 'react';
import "./ActiveSwitch.css";
import { postRealTimeDataToFirebase } from "../../../../services/Firebase";

function ActiveSwitch({ arduinoAccess, arduinoKey, activeStatus, setActiveStatus }) {
    const [button, setButton] = useState(activeStatus);
    useEffect(() => {
        document.querySelector(".activeSwitch").firstElementChild.checked = activeStatus ? true : false;
    }, [activeStatus])
    const activeStatusHandler = async () => {
        if (arduinoAccess) {
            const newStatus = activeStatus ? 0 : 1;
            setActiveStatus(newStatus);
            setButton(newStatus);
            await postRealTimeDataToFirebase(arduinoKey, newStatus);
        }
        else
            alert("KEY ERROR: No tanks are linked to your account")
    }
    return (
        <label className="activeSwitch">
            <input type="checkbox" onClick={activeStatusHandler} />
            <span className="slider round" ></span>
        </label>
    );
};

export default ActiveSwitch;
