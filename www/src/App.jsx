import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../src/components/Header'
import Card from '../src/components/Card'
import StorageFirebase from '../src/components/StorageFirebase'


function App() {
  // Return the App component.
  return (
    <Router>
      <Header />
      <Switch className="App">
        <Route exact path="/" component={Card} />
        <Route path="/login" component={StorageFirebase} />
      </Switch>
    </Router>
  );
}

export default App;
