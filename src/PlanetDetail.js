import React from 'react'
import { Tabs } from 'antd';
import Overview from './Overview'
import InDepth from './InDepth'
import BytheNumber from './BytheNumber';
import Exploration from './Exploration'
import Galleries from './Galleries'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}



class PlanetDetail extends React.Component {

    render() {
        return(
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Overview" key="1" >
                  <h1 >Overview</h1>
                  <Overview detail={this.props.detail}></Overview>
                </TabPane>
                <TabPane tab="In depth" key="2">
                  <h1>IN DEPTH</h1>
                  <InDepth detail={this.props.detail}></InDepth>
                </TabPane>
                <TabPane tab="By the number" key="3">
                  <h1>BY THE NUMBER</h1>
                  <BytheNumber detail={this.props.detail}></BytheNumber>
                </TabPane>
                <TabPane tab="Exploration" key="4">
                <h1>EXPLORATION</h1>
                  <Exploration detail= {this.props.detail}></Exploration>
                </TabPane>
                <TabPane tab="Galleries" key="5">
                <h1>Galleries</h1>
                  <Galleries detail= {this.props.detail}></Galleries>
                </TabPane>
          </Tabs>
        )
    }
}

export default PlanetDetail