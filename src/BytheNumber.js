import React from 'react'
import { Descriptions, Badge } from 'antd';

class BytheNumber extends React.Component{
    render() {
        return(
            <Descriptions layout="vertical" bordered>
                <Descriptions.Item label="Date of Discovery">Unknown</Descriptions.Item>
                <Descriptions.Item label="Discovered By">Prepaid</Descriptions.Item>
                <Descriptions.Item label="Average Orbit Distance">YES</Descriptions.Item>
                <Descriptions.Item label="Mean Orbit Velocity">2018-04-24 18:00:00</Descriptions.Item>
                <Descriptions.Item label="Orbit Eccentricity">2019-04-24 18:00:00</Descriptions.Item>
                <Descriptions.Item label="Equatorial Inclination"><Badge status="processing" text="Running" />
                </Descriptions.Item>
                <Descriptions.Item label="Equatorial Radius">$80.00</Descriptions.Item>
                <Descriptions.Item label="Equatorial Circumference">$20.00</Descriptions.Item>
                <Descriptions.Item label="Volume">$60.00</Descriptions.Item>
                <Descriptions.Item label="Density">$60.00</Descriptions.Item>
                <Descriptions.Item label="Mass">$60.00</Descriptions.Item>
                <Descriptions.Item label="Surface Gravity">$60.00</Descriptions.Item>
                <Descriptions.Item label="Escape Velocity">$60.00</Descriptions.Item>
                {/* <Descriptions.Item label="Config Info">
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1<br />
                </Descriptions.Item> */}
            </Descriptions>
        )
    }
}

export default BytheNumber