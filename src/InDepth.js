import React from 'react'

class InDepth extends React.Component{
    render() {
        return(
            <div className="indepth">
                <img src={this.props.detail.surface_image}></img>

            </div>
        )
    }
}

export default InDepth