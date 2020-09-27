import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Animals from "pages/Animals";
import Faces from "pages/Faces";
import LocationChanger from "components/LocationChanger";
import "./App.css";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/faces">
                    <Faces />
                </Route>
                <Route path="/">
                    <Animals />
                </Route>
            </Switch>
            <LocationChanger />
        </Router>
    );
}

export default App;
