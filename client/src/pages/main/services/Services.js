import React from 'react';
import "./Services.css";
// components
import ServiceCard from "../../components/serviceCard/ServiceCard";
// image sources
import * as images from "../../../constants/images";

function Services() {
    let i = 0;
    const services = [
        {
            name: "Water Tank Monitoring & Control",
            description: "You can now control and monitor your water tank at anytime and anywhere with our new service, \"Water Tank Monitoring & Control\"",
            imgSrc: images.waterPump
        }
    ];

    return (
        <div className="services">
            <h1>Services</h1>
            {services.map(service => (<ServiceCard key={i++} name={service.name} description={service.description} imgSrc={service.imgSrc} />))}
        </div>
    );
};

export default Services;
