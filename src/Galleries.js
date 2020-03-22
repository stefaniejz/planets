import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

class Galleries extends React.Component {
    render() {
        return(
            <div className="Galleries">
                {this.props.detail.galleries.map((image,index)=> {
                    return <Card hoverable style={{ width: 280, margin:30}}
            cover={<img alt="example" src={image} style={{ width:280, height:220}}/>}
          >
            <Meta style={{ height: 20}}title="Mecury" description="" />
          </Card>
            })}
            </div>
        )
    }
}

 

export default Galleries