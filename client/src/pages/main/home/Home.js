import React from 'react';
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import "./Home.css";
// routes
import * as routes from "../../../constants/routes";
// quotes
import quotes from "../../../constants/quotes";

function Home() {
    let i = 0;
    return (
        <div className="home">
            <TextLoop interval={10000} noWrap={false} className="home__textLoop">
                {quotes.map(quote => <p key={i++} className="home__animatedQuote">&#8220;{quote} &#8221;</p>)}
            </TextLoop>
            <h1 className="home__title">Welcome to Botify</h1>
            <p className="home__quote">Let's automate...</p>
            <p className="home__para">Botify is a free-to-use platform where you can get access to many automation services, anytime and anywhere. Presently, we only have "Water tank monitoring & control" accessible and we are working on adding more services in future.</p>
            <Link to={routes.sign_in} className="home__getStartedBtn">Get Started</Link>
        </div>
    );
};

export default Home;
