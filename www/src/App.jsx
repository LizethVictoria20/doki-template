import React from 'react'
import Header from '../src/components/Header'
import Card from '../src/components/Card'
import { StorageFirebase } from './components/StorageFirebase'

function App() {
  // Return the App component.
  return (
    <div className="App">
      <Header />
      <Card />
      <StorageFirebase />
    </div>
  );
}

export default App;
