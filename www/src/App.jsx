import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Header from "../src/components/Header";
import Card from "../src/components/Card";
import Login from "../src/components/Login";
import Register from "../src/components/Register";
import Documentation from "../src/components/Documentation";

function App() {
  // Return the App component.
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/register" exact component={Register} />
          <Route exact path="/" component={Card} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;