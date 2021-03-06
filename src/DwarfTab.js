import React from 'react'
import {Row, Col} from 'antd';


class DwarfTab extends React.Component {
    state = {
        dwarf:[{name:"Pluto", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/99_pluto_480x320.jpg", desscription:"Pluto is a complex world of ice mountains and frozen plains. Once considered the ninth planet, Pluto is the best known of a new class of worlds called dwarf planets."},
        {name:"Ceres", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/704_ceres_480x320.jpg", desscription:"Ceres makes up almost a third of the asteroid belt’s total mass, but it is still far smaller than Earth’s Moon. Ceres is heavily cratered with large amounts of ice underground."},
        {name:"Makemake", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/705_makemake_480x320.jpg", desscription:"It takes 310 Earth years for Makemake to complete one orbit around our Sun."},
        {name:"Haumea", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/723_haumea_480x320.jpg", desscription:"Haumea is one of the fastest rotating large objects in our solar system."},
        {name:"Eris", image:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/724_eris_480x320.jpg", desscription:"Eris is one of the largest known dwarf planets in our solar system. It’s about the same size as Pluto, but it is three times farther from the Sun. One orbit takes about 557 years."}]
    }

    render () {
        return (
            <div className="primary-subgrid" type="flex" justify="space-around">
                        {this.state.dwarf.map((dwarf,index)=>{
                            if (index % 2 === 1) {
                                return
                            }

                            return <Row type="flex" justify="space-around" style={{ marginTop: 15, marginBottom: 50 }} >
                            <Col span={11} style={{backgroundColor:"rgba(200,200,200)"}}>
                                <Row>
                                    <Col span={11}>
                                        <img src={dwarf.image}></img>
                                    </Col>
                                    <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                        <h3>{dwarf.name}</h3>
                                        <br></br>
                                        {dwarf.desscription}
                                    </Col>
                                </Row>
                            </Col>
                            {
                                index + 1 < this.state.dwarf.length ? (
                                    <Col span={11} style={{backgroundColor:"rgba(200,200,200)"}}>
                                        <Row>
                                            <Col span={11}>
                                                <img src={this.state.dwarf[index+1].image}></img>
                                            </Col>
                                            <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                                <h3>{this.state.dwarf[index+1].name}</h3>
                                                <br></br>
                                                {this.state.dwarf[index+1].desscription}
                                            </Col>
                                        </Row>
                                    </Col>
                                ) : (<Col span={11} style={{backgroundColor:"rgba(200,200,200,0)"}}>
                                <Row>
                                    <Col span={11}>
                                    </Col>
                                    <Col span={12} style={{padding:"30px",marginLeft:"15px"}}>
                                    </Col>
                                </Row>
                            </Col>)
                            }
                         </Row>
                        })}
                    </div>
        )
    }
}

export default DwarfTab