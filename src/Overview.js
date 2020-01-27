import React from 'react';
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

class Overview extends React.Component{
    render(){
        return(
            <div className="overview">
                <div>
                    <h2 id="overview-title">{this.props.detail.name}</h2>
                    <p>{this.props.detail.description1}</p>
                    <br></br>
                    <p>{this.props.detail.description2}</p>
                </div>
                <div >
                    <Carousel afterChange={onChange} style={{margin:"180"}}>
                        {this.props.detail.image.map((image,index)=>{
                          return  <div>
                               <img src={image}></img>
                            </div>
                        })}
                    </Carousel>
                </div>
            </div>

        )
    }
}

export default Overview