import React from 'react'

class InDepth extends React.Component{
    render() {
        return(
            <div className="indepth">
                <img src={this.props.detail.surface_image}></img>
                <div className="indepth_description" >
                    {this.props.detail.indepth_description.map((description, index)=>{
                        return <div>
                            <p style={{margin:"300"}}>{description}</p>
                        </div>
                    })}
                </div>

            </div>
        )
    }
}

export default InDepth