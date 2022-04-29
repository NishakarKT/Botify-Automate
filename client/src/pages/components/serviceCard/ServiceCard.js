import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ServiceCard.css";
// routes
import * as routes from "../../../constants/routes";

function ServiceCard({ name, description, imgSrc }) {
    return (
        <Link to={routes.sign_in} className="serviceCard">
            <img src={imgSrc} className="serviceCard__img" alt="" />
            <div className="serviceCard__info">
                <p className="serviceCard__infoTitle">{name}</p>
                <p className="serviceCard__infoDescription">{description}</p>
            </div>
        </Link>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    name: PropTypes.string,
    imgrc: PropTypes.string
}
