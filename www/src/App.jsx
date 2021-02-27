import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "../src/components/Header";
import Card from "../src/components/Card";
import Login from "./components/Login";
import Register from "./components/Register";
import Documentation from "../src/components/Documentation";

function App() {
  // Return the App component.
  return (
    <HashRouter basename="/">
      <Header />
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/register" exact component={Register}/>
          <Route exact path="/" component={Card} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
