import React from 'react'
import PrimaryTab from "./PrimaryTab"
import DwarfTab from "./DwarfTab"
import HypotheticalTab from "./HypotheticalTab"
import {Row, Col, Tabs} from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }

class PlanetsDescription extends React.Component {
    render () {
        return (
           <div className="primary-column"> 
            <Row >
                <Col span={24} >
                    <h1 style={{color:"white", padding:"15px"}}>Planets in Our Solar System</h1>
                    <Tabs defaultActiveKey="1" onChange={callback} tabBarGutter={2} size="large"style={{color:"white"}}>
                        <TabPane tab="Primary" key="1" style={{color:"black"}}>
                        <PrimaryTab></PrimaryTab>
                        </TabPane>
                        <TabPane tab="Dwarf" key="2" style={{color:"black"}}>
                        <DwarfTab></DwarfTab>
                        </TabPane>
                        <TabPane tab="Hypothetical" key="3" style={{color:"black"}}>
                        <HypotheticalTab></HypotheticalTab>
                        </TabPane>
                    </Tabs>
                    
                </Col>
            </Row>
           </div>
        )
    }
}

export default PlanetsDescription