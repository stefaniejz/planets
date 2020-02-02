import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"

class MarsComponent extends React.Component {
    state = {name:"Mars",
    description1:"The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volacanoes, evidence of an even more active past.",
    description2:"Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA currently has three spacecraft in orbit, one rover and one lander on the surface and another rover under construction here on Earth. India and ESA also have spacecraft in orbit above Mars. These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/78_mars_carousel_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/79_mars_carousel_3.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/80_mars_carousel_5.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/81_mars_carousel_4.jpg"]}
    
    render(){
        return(
        <div className="Mars">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://www.jpl.nasa.gov/images/mars/20160421/PIA00407-16.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Earth
                <br></br>
                The Red Planet
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 687 earth days
                    <br></br>
                   Planet type: Terrestrial
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
        </div>
        
        )
    }

    
}

export default MarsComponent