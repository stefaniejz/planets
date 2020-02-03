import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"

class SaturnComponent extends React.Component {
    state = {name:"Saturn",
    description1:"Saturn is the sixth planet from the Sun and the second largest planet in our solar system.",
    description2:"Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/151_saturn_carousel_1.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/152_saturn_carousel_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/153_saturn_carousel_3.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/154_saturn_carousel_4.jpg"]}
    
    render(){
        return(
        <div className="Saturn">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Saturn
                <br></br>
                Jewel of Our Solar System
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 10759 earth days
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

export default SaturnComponent