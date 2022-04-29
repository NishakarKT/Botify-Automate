import React from 'react';
import { NavLink } from "react-router-dom";
import "./TanksNav.css";
// routes
import * as routes from "../../../../constants/routes";

function TanksNav() {
    return (
        <div className="tanksNav">
            <NavLink to={routes.tankChart} className="tanksNav__element" activeClassName="tanksNav__active">Tank</NavLink>
            <NavLink to={routes.lineChart} className="tanksNav__element" activeClassName="tanksNav__active">Line</NavLink>
            <NavLink to={routes.barChart} className="tanksNav__element" activeClassName="tanksNav__active">Bar</NavLink>
            <NavLink to={routes.pieChart} className="tanksNav__element" activeClassName="tanksNav__active">Pie</NavLink>
        </div>
    );
};

export default TanksNav;
