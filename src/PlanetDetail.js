import React from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}



class PlanetOverview extends React.Component {
    render() {
        return(
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Overview" key="1">
                
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

export default PlanetOverview