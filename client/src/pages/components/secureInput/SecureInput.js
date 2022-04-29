import React, { useState } from 'react';
import "./SecureInput.css";
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';

function SecureInput({ input, setInput, placeholder }) {
    const [inputType, setInputType] = useState("password");
    const [visibility, setVisibility] = useState(null);

    const visibilityHandler = () => {
        setInputType(visibility ? "password" : "text");
        setVisibility(!visibility);
    };

    return (
        <div className="secureInput">
            <input type={inputType} placeholder={placeholder} required onChange={(e) => setInput(e.target.value)} />
            <div className={`secureInput__visibilityIcon ${input ? "visible" : "hide"}`}>
                {visibility ?
                    <VisibilityRoundedIcon
                        onClick={visibilityHandler} /> :
                    <VisibilityOffRoundedIcon
                        onClick={visibilityHandler} />}
            </div>
        </div>
    );
};

export default SecureInput;
