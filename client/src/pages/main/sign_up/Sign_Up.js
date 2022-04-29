import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import "./Sign_Up.css";
import { firebase } from "../../../lib/Firebase";
// utility funcs
import { addNewUser } from "../../../services/Firebase";
// material-ui
import { Button } from '@material-ui/core';
// components
import SecureInput from '../../components/secureInput/SecureInput';
// routes
import * as routes from "../../../constants/routes";
// image sources
import * as images from "../../../constants/images";

function Sign_Up() {
    const history = useHistory();
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [arduinoKey, setArduinoKey] = useState(null);
    const [error, setError] = useState(null);

    if (localStorage.getItem("botify-auth"))
        history.push(routes.tanks);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const data = {
                userId: user.uid,
                name: name,
                email: email,
                arduinoKeys: [arduinoKey],
                avatarImgSrc: [images["avatar" + Math.ceil(Math.random() * 6)]]
            }
            await addNewUser(data);
            history.push(routes.tanks);
            window.location.reload();
        }
        catch (err) {
            e.target.reset();
            setError(err?.message)
        };
    };

    return (
        <div className="signup">
            <div className="signup__container">
                <form className="signup__form" onSubmit={handleSignup}>
                    <input type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                    <SecureInput input={password} setInput={setPassword} placeholder="Password" />
                    <SecureInput input={arduinoKey} setInput={setArduinoKey} placeholder="Arduino Key" />
                    <Button className="signup__signupBtn" type="submit">Sign Up</Button>
                    <Link to={routes.sign_in} className="signup__signinBtn"><Button>Have an account ?</Button></Link>
                    <p className="signup__errMsg">{error}</p>
                </form>
            </div>
        </div>
    );
};

export default Sign_Up;
