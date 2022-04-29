import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Sign_Out.css";
import { firebase } from "../../lib/Firebase";
// routes
import * as routes from "../../constants/routes";

function Sign_Out() {
    const history = useHistory();

    const handleSignOut = async () => {
        await firebase.auth().signOut();
        history.push(routes.sign_in);
    };
    handleSignOut();
    return (<></>);
};

export default Sign_Out;
