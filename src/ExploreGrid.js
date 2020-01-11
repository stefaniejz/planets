import React from 'react'
import { Row, Col } from 'antd';

class ExploreGrid extends React.Component {
    render () {
        return (
        <Row>
                <Col span={12} style={{paddingTop:80, paddingLeft:200, paddingBottom:60}}>
                    <img style={{width:400}} src="https://solarsystem.nasa.gov/system/basic_html_elements/11636_5_detail_640x350_saturn.jpg"></img>
                </Col>
                <Col span={12} style={{paddingTop:100, paddingRight:300, paddingBottom:60}}>
                    <h2>Explore in 3D—Eyes on the Solar System</h2>
                    <br></br>
                    <p>Eyes on the Solar System lets you explore the planets, their moons, asteroids, comets and the spacecraft exploring them from 1950 to 2050. Ride with the Curiosity Rover as it lands on Mars or fly by Pluto with the New Horizons spacecraft all from the comfort of your home computer.</p>
                </Col>
        </Row>
        )
    }
}

export default ExploreGrid