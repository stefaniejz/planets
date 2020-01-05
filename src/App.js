import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu_bar from "./Menu_bar"
import HomePage from "./HomePage"

function App() {
  return (
    <div className="App">
      <Menu_bar></Menu_bar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
