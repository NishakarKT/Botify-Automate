import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import "./Sign_In.css";
import { firebase, googleAuthProvider } from "../../../lib/Firebase";
// utility funcs
import { addNewUser, doesEmailExist } from "../../../services/Firebase";
// material-ui
import { Button } from '@material-ui/core';
// components
import SecureInput from '../../components/secureInput/SecureInput';
// routes
import * as routes from "../../../constants/routes";
// image sources
import * as images from "../../../constants/images";

function Sign_In() {
    const history = useHistory();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    if (localStorage.getItem("botify-auth"))
        history.push(routes.tanks);

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            e.target.reset();
            history.push(routes.tanks);
            window.location.reload();
        }
        catch (err) {
            e.target.reset();
            setError(err?.message);
        };
    };

    const signInWithGoogle = async (e) => {
        e.preventDefault();
        try {
            const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
            if (!(await doesEmailExist(user.email))) {
                const arduinoKey = prompt("Enter Arduino Key : ");
                if (arduinoKey) {
                    const data = {
                        userId: user.uid,
                        name: user.displayName,
                        email: user.email,
                        arduinoKeys: [arduinoKey],
                        avatarImgSrc: [images["avatar" + Math.ceil(Math.random() * 6)]]
                    }
                    await addNewUser(data);
                }
                else {
                    alert("KEY ERROR: Arduino Key was not provided.")
                    throw error;
                }
            }
            history.push(routes.tanks);
            window.location.reload();
        }
        catch (err) { setError(err?.message); };
    };

    return (
        <div className="signin">
            <div className="signin__container">
                <form className="signin__form" onSubmit={handleSignin}>
                    <input type="text" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                    <SecureInput input={password} setInput={setPassword} placeholder="Password" />
                    <Button className="signin__signinBtn" type="submit" >Log In</Button>
                    <Button className="signin__googleSignInBtn" onClick={(e) => signInWithGoogle(e)}>
                        <img src={images.googleIcon} alt="" />
                        Sign In With Google
                    </Button>
                    <Link to={routes.sign_up} className="signin__signUpBtn"><Button>Don't have an account ?</Button></Link>
                    {error ?
                        <p className="signin__errMsg">{error}</p>
                        : null
                    }
                </form>
            </div>
        </div>
    );
};

export default Sign_In;
