import React from 'react';
import "./InfoCard.css";

function InfoCard({ name, imgSrc, roll }) {
    return (
        <div className="infoCard">
            <img src={imgSrc} alt="" />
            <p className="infoCard__name">{name}</p>
            <p className="infoCard__work">{roll}</p>
        </div>
    );
};

export default InfoCard;
