import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"


class MecuryComponent extends React.Component {
    state={name:"Mecury",
    description1:"The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.",
    description2:"From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/72_mercury_carousel_4.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/73_carousel_mercury_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/74_mercury_carousel_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/75_mercury_carousel_1.jpg"]}

    render(){
        return(
        <div className="Mecury">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://mustlovecrows.com/wp-content/uploads/2019/10/free-intuitive-readings-must-love-crows.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Mecury
                <br></br>
                The Swiftest Planet
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                {/* <h4 style={{color:"white"}}>Lenth of year:</h4> */}
                <p>Lenth of year: 88 earth days
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


export default MecuryComponent