import React from 'react'

class Exploration extends React.Component {
    render() {
        return (
            <div className="exploration">
                <div className="exploration-text">
                    {this.props.detail.exploration.map((para, index)=>{
                        return <div>
                            <p>{para}</p>
                            </div>
                    })}
                </div>
                <div className="exploration-events">
                    {this.props.detail.significant_evets.map((event, index)=>{
                        return <div>
                            <p>{event}</p>
                            </div>
                    })}
                </div>
            </div>

        )
    }
}

export default Exploration