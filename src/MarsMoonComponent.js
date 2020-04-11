import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class MarsMoonComponent extends React.Component {
    state = {
        name:"Mars's Moon",
        description1:"Asaph Hall was about to give up his frustrating search for a Martian moon one August night in 1877, but his wife Angelina urged him on. He discovered Deimos the next night, and Phobos six nights after that.",
        description2:"Ninety-four years later, NASA's Mariner 9 spacecraft got a much better look at the two moons from its orbit around Mars. The dominant feature on Phobos, it found, was a crater six miles (10 kilometers) wide—nearly half the width of the moon itself. It was given Angelina's maiden name: Stickney.",
        image:["https://solarsystem.nasa.gov/internal_resources/436",
        "https://solarsystem.nasa.gov/internal_resources/435"],
        indepth_description:[],
        size_and_distance:[],
        orbit_and_rotation:[],
        structure:[],
        formation:[],
        indepth_description:[],
        kid_friendly:[],
        surface:[],
        Magnetosphere:[],
        moons:[],
        Potential_for_life:"",
        date_of_discovery:"",
        discovered_by:"",
        average_orbit_distance:"",
        mean_orbit_velocity:"",
        orbit_eccentricity:"",
        equatorial_inclination:"",
        equatorial_radius:"",
        equatorial_circumference:"1",
        volume:"",
        density:"",
        mass:"",
        surface_area:"",
        surface_gravity:"",
        escape_velocity:"",
        atomospheric_constituents:"",
        exploration:[],
        significant_events:[],
        galleries:[],
    }

    render(){
        return(
        <div className="MarsMoon">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://solarsystem.nasa.gov/internal_resources/154">
              </img>
              <div className="planet-page-img-text-title">
                <p>Mars's Moon
                <br></br>
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
            <MoreDestination detail = {this.state}></MoreDestination>
        </div>
        )}
}

export default MarsMoonComponent;