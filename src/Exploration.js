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
                    <h2 style={{textAlignLast:"center"}}>significant events</h2>
                    {this.props.detail.significant_events.map((event, index)=>{
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