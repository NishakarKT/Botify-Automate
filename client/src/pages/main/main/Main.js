import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./Main.css";
// components
import Loading from "../../components/loading/Loading";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import How from "../how/How";
// routes
import * as routes from "../../../constants/routes";

// page components
const Home = lazy(() => import("../home/Home"));
const Services = lazy(() => import("../services/Services"));
const About = lazy(() => import("../about/About"));
const Avatars = lazy(() => import("../avatars/Avatars"));
const Signin = lazy(() => import("../sign_in/Sign_In"));
const Signup = lazy(() => import("../sign_up/Sign_Up"));
const Tanks = lazy(() => import("../tanks/main/Tanks"));

function Main() {
    return (
        <div className="main">
            <Nav />
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path={routes.home} component={Home} />
                    <Route path={routes.how} component={How} />
                    <Route path={routes.services} component={Services} />
                    <Route path={routes.about} component={About} />
                    <Route path={routes.avatars} component={Avatars} />
                    <Route path={routes.sign_in} component={Signin} />
                    <Route path={routes.sign_up} component={Signup} />
                    <Route path={routes.tanks} component={Tanks} />
                    <Redirect to={routes.home} />
                </Switch>
            </Suspense>
            <Footer />
        </div>
    );
};

export default Main;
