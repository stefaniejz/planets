import React from 'react'
import {Row, Col} from 'antd';


class HypotheticalTab extends React.Component {
    state = {
        hypothetical:[{name:"Planet X", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/1167_planetx_480x320.jpg", description:'Caltech researchers have found evidence suggesting there may be a "Planet X" deep in the solar system.'}]
    }

    render () {
        console.log("ssssssssbbbbbbbb")
        return (
            <div className="primary-subgrid" type="flex" justify="space-around">
                <Row type="flex" justify="space-around" style={{ marginTop: 15, marginBottom: 50 }} >
                    <Col span={11} style={{backgroundColor:"rgba(200,200,200)"}}>
                        <Row>
                            <Col span={11}>
                                <img src={this.state.hypothetical[0].image}></img>
                            </Col>
                            <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                <h3>{this.state.hypothetical[0].name}</h3>
                                <br></br>
                                {this.state.hypothetical[0].description}
                            </Col>
                        </Row>
                    </Col>
                    <Col span={11} style={{backgroundColor:"rgba(200,200,200,0)"}}>
                        <Row>
                            <Col span={11}>
                            </Col>
                            <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HypotheticalTab