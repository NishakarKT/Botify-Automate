import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect, History, useHistory } from 'react-router-dom';
import "./Tanks.css";
import { firebase } from "../../../../lib/Firebase";
// components
import Loading from '../../../components/loading/Loading';
import Controller from '../controller/Controller';
import TanksNav from '../tanksNav/TanksNav';
// hooks
import useUser from "../../../../hooks/useUser";
// routes
import * as routes from "../../../../constants/routes";
// colors
import * as colors from "../../../../constants/colors";
// graph components
const LineChart = lazy(() => import("../charts/lineChart/LineChart"));
const BarChart = lazy(() => import("../charts/barChart/BarChart"));
const PieChart = lazy(() => import("../charts/pieChart/PieChart"));

function Tanks() {
    const history = useHistory();
    const tankHeight = 100;
    const dangerLevel = 15;
    const alertLevel = 25;
    const cautionLevel = 35;
    const { userData } = useUser();
    const [statusColor, setStatusColor] = useState(null);
    const [arduinoAccess, setArduinoAccess] = useState(false);
    const [activeStatus, setActiveStatus] = useState(false);
    const [waterLevel, setWaterLevel] = useState([0]);
    const [time, setTime] = useState([0]);

    if (!localStorage.getItem("botify-auth"))
        history.push(routes.sign_in);

    useEffect(() => {
        const getRealTimeData = async () => {
            await firebase.database().ref("tanks/" + userData?.arduinoKeys[0]).on("value", snapshot => {
                const data = snapshot.val();
                const now = new Date();
                if (data && Object.keys(data).length > 0) {
                    setArduinoAccess(true);
                    setActiveStatus(data.activeStatus);
                    setTime(time => [...time, now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()]);

                    const newWaterLevel = data.waterLevel;
                    setWaterLevel(waterLevel => [...waterLevel, newWaterLevel]);
                    if (newWaterLevel <= dangerLevel || newWaterLevel >= (tankHeight - dangerLevel)) setStatusColor(colors.danger);
                    else if (newWaterLevel <= alertLevel || newWaterLevel >= (tankHeight - alertLevel)) setStatusColor(colors.alert);
                    else if (newWaterLevel <= cautionLevel || newWaterLevel >= (tankHeight - cautionLevel)) setStatusColor(colors.caution);
                    else setStatusColor(colors.normal);
                }
                else {
                    setArduinoAccess(false);
                    alert("KEY ERROR : No tanks are linked to your arduino key.")
                }
            });
        }
        if (userData?.arduinoKeys?.length > 0)
            getRealTimeData();
    }, [userData]);

    return (
        <div className="tanks">
            <TanksNav />
            <div className="tanks__control">
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path={routes.tankChart}><BarChart name={"Water Level"} backgroundColor={statusColor} x_data={[time[time.length - 1]]} y_data={[waterLevel[waterLevel.length - 1]]} minY={0} maxY={tankHeight} /></Route>
                        <Route path={routes.lineChart}><LineChart name={"Water Level"} backgroundColor={statusColor} borderColor={colors.border} x_data={time} y_data={waterLevel} minY={0} maxY={tankHeight} /></Route>
                        <Route path={routes.barChart}><BarChart name={"Water Level"} backgroundColor={statusColor} borderColor={colors.border} x_data={time} y_data={waterLevel} minY={0} maxY={tankHeight} /></Route>
                        <Route path={routes.pieChart}><PieChart backgroundColors={[colors.normal, colors.danger]} borderColor={colors.border} full={waterLevel[waterLevel.length - 1]} empty={tankHeight - waterLevel[waterLevel.length - 1]} /></Route>
                        <Redirect to={routes.tankChart} />
                    </Switch>
                </Suspense>
                <Controller setActiveStatus={setActiveStatus} arduinoAccess={arduinoAccess} activeStatus={activeStatus} time={time[time.length - 1]} setTime={setTime} waterLevel={(waterLevel[waterLevel.length - 1])?.toFixed(2)} setWaterLevel={setWaterLevel} setStatusColor={setStatusColor} />
            </div>
        </div>
    );
};

export default Tanks;
