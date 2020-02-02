import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"

class EarthComponent extends React.Component {
    state = {name:"Earth",
    description1:"Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.",
    description2:'The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”',
    image:["https://solarsystem.nasa.gov/system/feature_items/images/69_earth_carousel_3.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/70_earth_carousel_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/68_epicearthmoonstill_800.png",
    "https://solarsystem.nasa.gov/system/feature_items/images/71_earth_carousel_1.jpg"]}
    
    render(){
        return(
        <div className="Earth">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://live.staticflickr.com/5545/9558683212_43cb5b35cc_b.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Earth
                <br></br>
                Our Home Planet
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 365 earth days
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

export default EarthComponent