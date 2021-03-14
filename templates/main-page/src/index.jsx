/* Add JavaScript code here! */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode >,
  document.getElementById('root'),
);
