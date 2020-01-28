import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"

class VenusComponent extends React.Component {
    state = {name:"Venus",
    description1:"",
    description2:"",
    image:["","","",""]}
    
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
                The Swiftest Planet
                </p>im
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

export default VenusComponent