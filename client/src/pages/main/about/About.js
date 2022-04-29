import React from 'react';
import "./About.css";
// components
import InfoCard from "../../components/infoCard/InfoCard";
// image sources
import members from "../../../constants/members";

function About() {
    let i = 0;
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>Botify was created by Nishakar K. (Team O) under DIY Group Project.</p>
            <p>Our Arduino based project successfully monitors the water level in the tank.</p>
            <p>The project is automated and you may also control your water tank from anywhere.</p>
            <h2>Team Members</h2>
            <div className="about__members">
                {members.map(member => (<InfoCard key={i++} name={member.name} imgSrc={member.imgSrc} roll={member.roll} />))}
            </div>
        </div>
    );
};

export default About;
