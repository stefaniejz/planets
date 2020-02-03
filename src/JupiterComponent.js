import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"

class JupiterComponent extends React.Component {
    state = {name:"Jupiter",
    description1:"Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe. ",
    description2:"Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/10_PIA02879_800.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/11_stsci-h-p1936a_800.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/13_PIA22335-800.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/12_P44430Ac_800.jpg"]}
    
    render(){
        return(
        <div className="Jupiter">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://www.kodkey.com/wp-content/uploads/2018/07/frlxfn0cnkmclgcw0oxn.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Jupiter
                <br></br>
                Twice as massive as all 
                <br></br>
                the other planets combined
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 4333 earth days
                    <br></br>
                   Planet type: Gas Giant
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
        </div>
        
        )
    }

    
}

export default JupiterComponent