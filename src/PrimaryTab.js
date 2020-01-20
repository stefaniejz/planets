import React from 'react'
import {Row, Col} from 'antd';

class PrimaryTab extends React.Component {
    state = {
        planets:[{name:"Mercury", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/2_mercury_480x320_new.jpg", desscription:"Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days."},
        {name:"Venus", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/3_480x320_venus.png", desscription:"Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system."},
        {name:"Earth", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/4_earth_480x320.jpg", desscription:"Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface."},
        {name:"Mars", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg", desscription:"Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere."},
        {name:"Jupiter", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/9_jupiter_480x320_new.jpg", desscription:"Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth."},
        {name:"Saturn", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/38_saturn_480x320.jpg", desscription:"Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's."},
        {name:"Uranus", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/69_uranus_480x320.jpg", desscription:"Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side."},
        {name:"Neptune", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/90_neptune_480x320.jpg", desscription:"Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations."}]
    }

    render () {
        return (
            <div className="primary-subgrid" type="flex" justify="space-around">
                        {this.state.planets.map((planet,index)=>{
                            if (index % 2 === 1) {
                                return
                            }

                            return <Row type="flex" justify="space-around" style={{ marginTop: 15, marginBottom: 50 }} >
                            <Col span={11} style={{backgroundColor:"rgba(200,200,200)"}}>
                                <Row>
                                    <Col span={11}>
                                        <img src={planet.image}></img>
                                    </Col>
                                    <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                        <h3>{planet.name}</h3>
                                        <br></br>
                                        {planet.desscription}
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={11} style={{backgroundColor:"rgba(200,200,200)"}}>
                                <Row>
                                    <Col span={11}>
                                        <img src={this.state.planets[index+1].image}></img>
                                    </Col>
                                    <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                        <h3>{this.state.planets[index+1].name}</h3>
                                        <br></br>
                                        {this.state.planets[index+1].desscription}
                                    </Col>
                                </Row>
                            </Col>
                         </Row>
                        })}
                    </div>
        )
    }
}

export default PrimaryTab