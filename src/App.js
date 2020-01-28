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
      </Router>
    </div>
  );
}

export default App;
