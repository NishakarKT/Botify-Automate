import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
// material ui
import { Button } from '@material-ui/core';
// hooks
import useUser from "../../../hooks/useUser";
// routes
import * as routes from "../../../constants/routes";
// image sources
import * as images from "../../../constants/images";
function Nav() {
    const { userData } = useUser();
    const isUser = userData?.userId ? true : false;
    return (
        <div className="nav">
            <div className="nav__leftLogo">
                <Link to={routes.home}><img src={images.botifyLogo} className="nav__logo" alt="" /></Link>
                <p>Botify</p>
            </div>
            <div className="nav__leftElements">
                <NavLink to={routes.home} className="nav__element" activeClassName="nav__active">Home</NavLink>
                <NavLink to={routes.how} className="nav__element" activeClassName="nav__active">How</NavLink>
                <NavLink to={routes.services} className="nav__element" activeClassName="nav__active">Services</NavLink>
                <NavLink to={routes.about} className="nav__element" activeClassName="nav__active">About</NavLink>
            </div>
            <div className="nav__right">
                <div className="nav__rightOptions">
                    <Link to={isUser ? routes.avatars : routes.sign_in} className="nav__btn">
                        <Button>{isUser ? "Avatar" : "Sign In"}</Button></Link>
                    <Link to={isUser ? routes.sign_out : routes.sign_up} className="nav__btn">
                        <Button>{isUser ? "Sign Out" : "Sign Up"}</Button></Link>
                </div>
                {isUser ? <>
                    <Link to={routes.tanks} className="nav__userLink">
                        <div className="nav__rightUser">
                            <img className="nav__avatarImg" src={userData?.avatarImgSrc} alt="" />
                            <p className="nav__username">{userData?.name?.split(" ")[0]}</p>
                        </div>
                    </Link>
                </>
                    : null}
            </div>
        </div>
    );
};

export default Nav;
