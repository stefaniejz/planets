import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"

class UranusComponent extends React.Component {
    state = {name:"Uranus",
    description1:"The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.",
    description2:"April 24, 2018: The jokes, they write themselves. The science is pretty interesting, too. What do the clouds of Uranus have in common with rotten eggs? The composition of Uranus' clouds had long been a mystery. In April 2017, a global research team found hydrogen sulfide, the odiferous gas that most people avoid, in Uranus’ cloud tops—a striking difference from the gas giant planets located closer to the Sun.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/88_carousel_uranus.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/89_uranus_carousel_1.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/90_uranus_carousel_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/92_uranus_carousel_4.jpg"]}
    
    render(){
        return(
        <div className="Uranus">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"105vh"}} 
              src="https://www.jpl.nasa.gov/images/voyager/20160121/PIA18182-16.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Uranus
                <br></br>
                The Sideways Planet
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 30687 earth days
                    <br></br>
                   Planet type: Ice Giant
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
        </div>
        
        )
    }

    
}

export default UranusComponent