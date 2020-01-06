import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from "./MenuBar"
import HomePage from "./HomePage"
import Grid from "./Grid"
import PrimaryColumn from "./PrimaryColumn"

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <HomePage></HomePage>
      <Grid></Grid>
      <PrimaryColumn></PrimaryColumn>
    </div>
  );
}

export default App;
