import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../src/components/Header'
import Card from '../src/components/Card'
import StorageFirebase from '../src/components/StorageFirebase'
import Documentation from '../src/components/Documentation'


function App() {
  // Return the App component.
  return (
    <Router>
      <Header />
      <div className="App">
        <Route exact path="/" component={Card} />
        <Route path="/login" component={StorageFirebase} />
        <Route path="/documentation" component={Documentation} />
      </div>
    </Router>
  );
}

export default App;
