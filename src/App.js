import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from "./MenuBar"
import HomePage from "./HomePage"
import Grid from "./Grid"
import PrimaryColumn from "./PrimaryColumn"
import ExploreGrid from "./ExploreGrid"

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <HomePage></HomePage>
      <Grid></Grid>
      <PrimaryColumn></PrimaryColumn>
      <ExploreGrid></ExploreGrid>
    </div>
  );
}

export default App;
