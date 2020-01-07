import React from 'react'
import {Row, Col, Breadcrumb} from 'antd';

class PrimaryColumn extends React.Component {
    render () {
        return (
           <div className="primary-column"> 
            <Row >
                <Col span={24} >
                    <h1 style={{color:"white", padding:"15px"}}>Planets in Our Solar System</h1>
                    <div className="breadcrumb">
                        <Breadcrumb separator="|">
                            <Breadcrumb.Item>
                              Primary
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                              Dwarf
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                              Hypothetical
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="primary-subgrid" type="flex" justify="space-around">
                        <Row type="flex" justify="space-around" style={{ marginTop: 25 }} >
                            <Col span={11} style={{backgroundColor:"rgb(200,200,200)"}}>
                                <Row>
                                    <Col span={11}>
                                        <img src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/2_mercury_480x320_new.jpg"></img>
                                    </Col>
                                    <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                        <h3>Mercury</h3>
                                        <br></br>
                                        Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={11} style={{backgroundColor:"rgb(200,200,200)"}}>
                                <Row>
                                    <Col span={11}>
                                        <img src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/3_480x320_venus.png"></img>
                                    </Col>
                                    <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                        <h3>Venus</h3>
                                        <br></br>
                                         Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.
                                    </Col>
                                </Row>
                            </Col>
                         </Row>
                         <Row type="flex" justify="space-around" style={{ marginTop: 25 }}>
                            <Col span={11} style={{backgroundColor:"rgb(200,200,200)"}}>
                                <Row>
                                    <Col span={11}>
                                        <img src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/4_earth_480x320.jpg"></img>
                                    </Col>
                                    <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                        <h3>Earth</h3>
                                        <br></br>
                                        
                                        Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={11} style={{backgroundColor:"rgb(200,200,200)"}}>
                                <Row>
                                    <Col span={11}>
                                        <img src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg"></img>
                                    </Col>
                                    <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                        <h3>Mars</h3>
                                        <br></br>
                                        Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.
                                    </Col>
                                </Row>
                            </Col>
                         </Row>
                         <Row type="flex" justify="space-around" style={{ marginTop: 25 }}>
                            <Col span={11} style={{backgroundColor:"rgb(200,200,200)"}}>
                                <Row>
                                    <Col span={11}>
                                        <img src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/9_jupiter_480x320_new.jpg"></img>
                                    </Col>
                                    <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                        <h3>Jupiter</h3>
                                        <br></br>
                                         Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={11} style={{backgroundColor:"rgb(200,200,200)"}}>
                                <Row>
                                    <Col span={11}>
                                        <img src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/38_saturn_480x320.jpg"></img>
                                    </Col>
                                    <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                        <h3>Satrun</h3>
                                        <br></br>
                                        Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.
                                    </Col>
                                </Row>
                            </Col>
                         </Row>
                         <Row type="flex" justify="space-around" style={{ marginTop: 25 }}>
                            <Col span={11} style={{backgroundColor:"rgb(200,200,200)"}}>
                                <Row>
                                    <Col span={11}>
                                        <img src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/69_uranus_480x320.jpg"></img>
                                    </Col>
                                    <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                        <h3>Uranus</h3>
                                        <br></br>
                                        Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={11} style={{backgroundColor:"rgb(200,200,200)"}}>
                                <Row>
                                    <Col span={11}>
                                        <img src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/90_neptune_480x320.jpg"></img>
                                    </Col>
                                    <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                        <h3>Neptune</h3>
                                        <br></br>
                                        Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations.
                                    </Col>
                                </Row>
                            </Col>
                         </Row>
                    </div>
                </Col>
            </Row>
           </div>

        )
    }
}

export default PrimaryColumn