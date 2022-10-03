import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import GraphDesign from "./Components/Task1/GraphDesign";
import * as React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import TableDesign from "./Components/Task2/TableDesign";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={GraphDesign} />
            <Route exact path="/GraphDesign" component={GraphDesign} />
            <Route exact path="/TableDesign" component={TableDesign} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
