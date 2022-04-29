import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
// contexts
import UserContext from "./contexts/User";
// hooks
import useAuthListener from './hooks/useAuthListener';
// routes
import * as routes from "./constants/routes";
// routes
import * as images from "./constants/images";
// components
import Loading from "./pages/components/loading/Loading";

const Signout = lazy(() => import("./pages/sign_out/Sign_Out"));
const Main = lazy(() => import("./pages/main/main/Main"));

function App() {
  const { user } = useAuthListener(UserContext);
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<Loading />}>
          <img className="body__bg" src={images.bg} alt="" />
          <Switch >
            <Route path={routes.sign_out} component={Signout} />
            <Route path={routes.main} component={Main} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
