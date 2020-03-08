import React from 'react'

class Exploration extends React.Component {
    render() {
        return (
            <div className="exploration">
                <div>
                    {this.props.detail.exploration.map((para, index)=>{
                        return <div>
                            <p>{para}</p>
                            </div>
                    })}
                </div>
            </div>

        )
    }
}

export default Exploration