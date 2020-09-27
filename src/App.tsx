import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Animals from "pages/Animals";
import Faces from "pages/Faces";

import "./App.css";
import RandomRouteButton from "components/RandomRouteButton";

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
            <LongPressButton onPress={onRouteChangeRequest} />
        </Router>
    );
}

export default App;
