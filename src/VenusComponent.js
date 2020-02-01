import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"

class VenusComponent extends React.Component {
    state = {name:"Venus",
    description1:"Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world.",
    description2:"Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system—with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/143_venus_carousel_5.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/144_venus_carousel_4.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/146_venus_carousel_3.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/147_venus_carousel_2.jpg"]}
    
    render(){
        return(
        <div className="Venus">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://mustlovecrows.com/wp-content/uploads/2019/10/free-intuitive-readings-must-love-crows.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Venus
                <br></br>
                Planetary Hot Spot
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                {/* <h4 style={{color:"white"}}>Lenth of year:</h4> */}
                <p>Lenth of year: 225 earth days
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

export default VenusComponent