import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LocationChanger from "components/LocationChanger";
import { routes } from "routes";
import "./App.css";

function App() {
    useEffect(() => {
        console.log(`Pitxapie ${process.env.REACT_APP_VERSION}`);
    }, []);

    return (
        <Router>
            <Switch>
                {routes.map((route) => (
                    <Route key={route.pathname} path={route.pathname}>
                        <route.component />
                    </Route>
                ))}
            </Switch>
            <LocationChanger routes={routes} />
        </Router>
    );
}

export default App;
