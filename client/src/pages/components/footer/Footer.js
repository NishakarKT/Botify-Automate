import React from 'react';
import "./Footer.css";
// image sources
import * as routes from "../../../constants/routes";
// image sources
import * as images from "../../../constants/images";

function Footer() {
    return (
        <div className="footer">
            <p>Images used are from <a href={routes.unsplash} target="_blank" rel="noreferrer">Unsplash </a>- The internet’s source of freely-usable images.</p>
            <p>Avatars used are from <a href={routes.vecteezy} target="_blank" rel="noreferrer">Vecteezy </a>- The internet’s source of freely-usable vector art.</p>
            <div className="footer__contact">
                <a href={routes.facebookKgp} target="_blank" rel="noreferrer"><img src={images.facebookLogo} alt="" /></a>
                <a href={routes.instagramKgp} target="_blank" rel="noreferrer"><img src={images.instagramLogo} alt="" /></a>
                <a href={routes.linkedinKgp} target="_blank" rel="noreferrer"><img src={images.linkedinLogo} alt="" /></a>
                <a href={routes.twitterKgp} target="_blank" rel="noreferrer"><img src={images.twitterLogo} alt="" /></a>
            </div>
        </div>
    );
};

export default Footer;
