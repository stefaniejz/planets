import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"

class NeptuneComponent extends React.Component {
    state = {name:"Neptune",
    description1:"Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.",
    description2:"More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/82_carousel_neptune_1.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/84_neptune_carousel_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/85_neptune_carousel_4.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/86_carousel_neptune_5.jpg"]}
    
    render(){
        return(
        <div className="Neptune">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://naked-science.ru/wp-content/uploads/2019/03/field_image_neptune0.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Neptune
                <br></br>
                The Windiest Planet
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 60190 earth days
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

export default NeptuneComponent