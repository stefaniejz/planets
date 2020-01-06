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
                    <div className="primary-subgrid">
                        <Row type="flex" justify="space-around">
                            <Col span={10} style={{backgroundColor:"rgb(200,200,200)"}}>
                                <Row>
                                    <Col span={12}>
                                        <img src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/2_mercury_480x320_new.jpg"></img>
                                    </Col>
                                    <Col span={12} style={{padding:"25px"}}>
                                        <h3>Mercury</h3>
                                        <br></br>
                                        Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={10} style={{backgroundColor:"rgb(200,200,200)"}}>
                                <Row>
                                    <Col span={12}>
                                        <img src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/3_480x320_venus.png"></img>
                                    </Col>
                                    <Col span={12} style={{padding:"25px"}}>
                                        <h3>Venus</h3>
                                        <br></br>
                                         Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.
                                    </Col>
                                </Row>
                            </Col>
                         </Row>
                        {/* <Row type="flex" justify="space-around" align="middle">
                            <Col span={8}>col-8</Col>
                            <Col span={8}>col-8</Col>
                           
                        </Row>
                        <Row type="flex" justify="space-around" align="middle"> 
                            <Col span={8}>col-6</Col>
                            <Col span={8}>col-6</Col>
                        </Row>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col span={8}>col-6</Col>
                            <Col span={8}>col-6</Col>
                        </Row> */}
                    </div>
                </Col>
            </Row>
           </div>

        )
    }
}

export default PrimaryColumn