import React from 'react'
import { Tabs } from 'antd';
import Overview from './Overview'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}



class PlanetDetail extends React.Component {

    render() {
        return(
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Overview" key="1">
                  <Overview detail={this.props.detail}></Overview>
                
                </TabPane>
                <TabPane tab="In depth" key="2">
                IN DEPTH
                </TabPane>
                <TabPane tab="Exploration" key="3">
                EXPLORATION
                </TabPane>
          </Tabs>
        )
    }
}

export default PlanetDetail