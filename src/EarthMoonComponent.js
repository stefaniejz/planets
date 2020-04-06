import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class EarthMoonComponent extends React.Component {
    state = {
        name:"Earth's Moon",
        description1:"Earth's Moon is the only place beyond Earth where humans have set foot. The brightest and largest object in our night sky, the Moon makes Earth a more livable planet by moderating our home planet's wobble on its axis, leading to a relatively stable climate. It also causes tides, creating a rhythm that has guided humans for thousands of years. The Moon was likely formed after a Mars-sized body collided with Earth.",
        description2:"Our moon is the fifth largest of the 190+ moons orbiting planets in our solar system. Earth's only natural satellite is simply called the Moon because people didn't know other moons existed until Galileo Galilei discovered four moons orbiting Jupiter in 1610.",
        image:["https://solarsystem.nasa.gov/system/feature_items/images/58_earthsmoon_carousel_1.jpg",
        "https://solarsystem.nasa.gov/system/feature_items/images/59_earthsmoon_carousel_2.jpg",
        "https://solarsystem.nasa.gov/system/feature_items/images/60_earthsmoon_carousel_4.jpg",
        "https://solarsystem.nasa.gov/system/feature_items/images/61_earthsmoon_carousel_5.jpg",
        "https://solarsystem.nasa.gov/system/feature_items/images/62_earthsmoon_carousel_3.jpg"],
    }

    render(){
        return(
        <div className="Mecury">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://media.architecturaldigest.com/photos/57a25e17b6c434ab487bc2c0/16:9/w_2560%2Cc_limit/moon-express.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Earth's Moon
                <br></br>
                Our Natural Satellite
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
            <MoreDestination detail = {this.state}></MoreDestination>
        </div>
        )}
}

export default EarthMoonComponent;