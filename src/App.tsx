import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Animals from "pages/Animals";
import Faces from "pages/Faces";

import "./App.css";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/faces">
                    <Faces />
                </Route>
                <Route path="/">
                    <Animals />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
