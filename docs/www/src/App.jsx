import React, { useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Switch, useLocation } from "react-router-dom";
import Header from "../src/components/Header";
import Card from "../src/components/Card";
import Login from "../src/components/Login";
import Register from "../src/components/Register";
import Documentation from "../src/components/Documentation";
import Tutorial from '../src/components/Tutorial'
import StorageFirebase from "../src/components/StorageFirebase";
import Home from "../src/components/Home";


// Heads-up:
// - body's classes are replaced
// - Not tested with nested routes
function useRouteClassNames() {
  const location = useLocation();
  useEffect(() => {
    let name = location.pathname.replace("/", "");
    if (!name) name = "home";
    document.body.className = `page--${name}`;
  }, [location]);
}


function App() {
  // Return the App component.
  useRouteClassNames();
  return (
    <>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/tutorial" component={Tutorial} />
          <Route path="/register" exact component={Register} />
          <Route path="/new-template" exact component={StorageFirebase} />
          <Route exact path="/templates" component={Card} />
          <Route exact path="/" component={Home} />

        </Switch>
      </div>
    </>
  );
}

export default App;