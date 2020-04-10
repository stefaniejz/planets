import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from "./MenuBar"
import HomePage from "./HomePage"
import Grid from "./Grid"
import PlanetsDescription from "./PlanetsDescription"
import ExploreGrid from "./ExploreGrid"
import MoreDestination from"./MoreDestination"
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import MecuryComponent from "./MecuryComponent"
import VenusComponent from "./VenusComponent"
import EarthComponent from "./EarthComponent"
import MarsComponent from "./MarsComponent"
import JupiterComponent from "./JupiterComponent"
import SaturnComponent from "./SaturnComponent"
import UranusComponent from "./UranusComponent"
import NeptuneComponent from "./NeptuneComponent"
import EarthMoonComponent from "./EarthMoonComponent"
import MarsMoonComponent from "./MarsMoonComponent"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={'/'}>
        <MenuBar></MenuBar>
        <HomePage></HomePage>
        <Grid></Grid>
        <PlanetsDescription></PlanetsDescription>
        <ExploreGrid></ExploreGrid>
        <MoreDestination></MoreDestination>
        </Route>
        <Route exact path={'/mecury'} component={MecuryComponent} />
        <Route exact path={'/venus'} component={VenusComponent} />
        <Route exact path={'/earth'} component={EarthComponent} />
        <Route exact path={'/mars'} component={MarsComponent} />
        <Route exact path={'/jupiter'} component={JupiterComponent} />
        <Route exact path={'/saturn'} component={SaturnComponent} />
        <Route exact path={'/uranus'} component={UranusComponent} />
        <Route exact path={'/neptune'} component={NeptuneComponent} />
        <Route exact path={'/earthmoon'} component={EarthMoonComponent} />
        <Route exact path={'/marsmoon'} component={MarsMoonComponent} />
      </Router>
    </div>
  );
}

export default App;
