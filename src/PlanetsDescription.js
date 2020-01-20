import React from 'react'
import PrimaryTab from "./PrimaryTab"
import DwarfTab from "./DwarfTab"
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
                    {/* <div className="breadcrumb">
                        <Breadcrumb separator="|">
                            <Breadcrumb.Item onClick={this.handlePrimaryClick}>
                              Primary
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                              Dwarf
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                              Hypothetical
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div> */}
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Primary" key="1">
                        <PrimaryTab></PrimaryTab>
                        </TabPane>
                        <TabPane tab="Dwarf" key="2">
                        <DwarfTab></DwarfTab>
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                    
                </Col>
            </Row>
           </div>
        )
    }
}

export default PlanetsDescription