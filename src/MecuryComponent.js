import React from 'react'
import MenuBar from "./MenuBar"


class MecuryComponent extends React.Component {
    render(){
        return(
        <div className="Mecury">
            <MenuBar></MenuBar>
            <div className="Mecury-page-img-container">
              <img className="mecury-page-img" style={{width:"100%"}} 
              src="https://mustlovecrows.com/wp-content/uploads/2019/10/free-intuitive-readings-must-love-crows.jpg">
              </img>
              <div className="mecury-page-img-text-title">
                <p>Mecury
                <br></br>
                The Swiftest Planet
                </p>
              </div>
              <div className="mecury-page-img-text-stats">
                {/* <h4 style={{color:"white"}}>Lenth of year:</h4> */}
                <p>Lenth of year: 88 earth days
                    <br></br>
                   Planet type: Terrestrial
                </p>
              </div>
            </div>
        </div>
        
        )
    }
}


export default MecuryComponent