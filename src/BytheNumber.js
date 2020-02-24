import React from 'react'
import { Descriptions, Badge } from 'antd';

class BytheNumber extends React.Component{
    render() {
        return(
            <Descriptions layout="vertical" bordered>
                <Descriptions.Item label="Date of Discovery">{this.props.detail.date_of_discovery}</Descriptions.Item>
                <Descriptions.Item label="Discovered By">{this.props.detail.discovered_by}</Descriptions.Item>
                <Descriptions.Item label="Average Orbit Distance">{this.props.detail.average_orbit_distance}</Descriptions.Item>
                <Descriptions.Item label="Mean Orbit Velocity">{this.props.detail.mean_orbit_velocity}</Descriptions.Item>
                <Descriptions.Item label="Orbit Eccentricity">{this.props.detail.orbit_eccentricity}</Descriptions.Item>
                <Descriptions.Item label="Equatorial Inclination">{this.props.detail.equatorial_inclination}</Descriptions.Item>
                <Descriptions.Item label="Equatorial Radius">{this.props.detail.equatorial_radius}</Descriptions.Item>
                <Descriptions.Item label="Equatorial Circumference">{this.props.detail.equatorial_circumference}</Descriptions.Item>
                <Descriptions.Item label="Volume">{this.props.detail.volume}</Descriptions.Item>
                <Descriptions.Item label="Density">{this.props.detail.density}</Descriptions.Item>
                <Descriptions.Item label="Mass">{this.props.detail.mass}</Descriptions.Item>
                <Descriptions.Item label="Surface Area">{this.props.detail.surface_area}</Descriptions.Item>
                <Descriptions.Item label="Surface Gravity">{this.props.detail.surface_gravity}</Descriptions.Item>
                <Descriptions.Item label="Escape Velocity" span={1}>{this.props.detail.escape_velocity}</Descriptions.Item>
             </Descriptions>
        )
    }
}

export default BytheNumber