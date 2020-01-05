import React from 'react'
import {Row, Col} from 'antd';

class Grid extends React.Component {
    render () {
        return (
            <Row>
                <Col className='column-vertical' span={12}>
                  <div>
                      <h2>Overview</h2>
                  </div>
                  <div>
                      <p className="grid-paragraph">
                        There are more planets than stars in our galaxy. The current count orbiting our star: eight.
                        The inner, rocky planets are Mercury, Venus, Earth and Mars. The outer planets are gas giants Jupiter and Saturn and ice giants Uranus and Neptune.
                        Beyond Neptune, a newer class of smaller worlds called dwarf planets reign, including perennial favorite Pluto.
                      </p>
                  </div>
                </Col>
                <Col span={12}>
                  <div>
                      <h2>What is a planet?</h2>
                  </div>
                  <div>
                    <p className="grid-paragraph">
                        It must orbit a star (in our cosmic neighborhood, the Sun).
                        <br></br>
                        It must be big enough to have enough gravity to force it into a spherical shape.
                        <br></br>
                        It must be big enough that its gravity cleared away any other objects of a similar size near its orbit around the Sun.
                    </p>
                  </div>
                </Col>
          </Row>
        )
    }
  
}

export default Grid