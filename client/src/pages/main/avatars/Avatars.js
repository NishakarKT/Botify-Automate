import React from 'react';
import { useHistory } from "react-router-dom";
import "./Avatars.css";
// contexts
import useUser from '../../../hooks/useUser';
// utility funcs
import { updateAvatarWithUserId } from "../../../services/Firebase";
// image sources
import * as images from "../../../constants/images";
// avatars
import avatars from '../../../constants/avatars';
// routes
import * as routes from '../../../constants/routes';

function Avatars() {
    let i = 0;
    const history = useHistory();
    const { userData } = useUser();

    if (!localStorage.getItem("botify-auth"))
        history.push(routes.sign_in);

    const updateAvatar = async (e) => {
        if (userData?.docId) {
            document.querySelector(".nav__avatarImg").src = e.target.src;
            history.push(routes.tanks);
            await updateAvatarWithUserId(userData.docId, e.target.src);
        }
    }
    return (
        <div className="avatars">
            <h1>Avatars</h1>
            <h2>Choose an Avatar</h2>
            <div className="avatars__container">
                {avatars.map(avatar => (<img key={i++} src={images[avatar]} alt="" onClick={(e) => updateAvatar(e)} />))}
            </div>
        </div>
    );
};

export default Avatars;
