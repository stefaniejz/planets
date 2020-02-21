import React from 'react'

class InDepth extends React.Component{
    render() {
        return(
            <div className="indepth" style={{marginRight:350, marginLeft:350, marginBottom:50}}>
                <img src={this.props.detail.surface_image}></img>
                <div className="indepth-description">
                    {this.props.detail.indepth_description.map((description, index)=>{
                        return <div >
                            <p>{description}</p>
                        </div>
                    })}
                </div>
                <h2 className="indepth-title">Size and Distance</h2>
                <div className="size-and-distance">
                    {this.props.detail.size_and_distance.map((element, index)=>{
                        return <div>
                            <p>{element}</p>
                        </div>
                    })}
                </div>
                <h2 className="indepth-title">Orbit and Rotation</h2>
                <div className="orbit-and-rotation">
                    {this.props.detail.orbit_and_rotation.map((element, index)=>{
                        return <div>
                            <p>{element}</p>
                        </div>
                    })}
                </div>
                <h2 className="indepth-title">Structure</h2>
                <div className="indepth-structure">
                    {this.props.detail.structure.map((element, index)=>{
                            return <div>
                                <p>{element}</p>
                            </div>
                        })}
                </div>
                <h2 className="indepth-title">Formation</h2>
                <div className="indepth-formation">
                    {this.props.detail.formation.map((element, index)=>{
                        return <div>
                            <p>{element}</p>
                        </div>
                    })}
                </div>
                <h2 className="indepth-title">Kid Friendly</h2>
                <div className="kid-friendly">
                    {this.props.detail.kid_friendly.map((element, index)=>{
                        return <div>
                            <p>{element}</p>
                        </div>
                    })}
                </div>
                <h2 className="indepth-title">Surface</h2>
                <div className="indepth-surface">
                    {this.props.detail.surface.map((element, index)=>{
                        return <div>
                            <p>{element}</p>
                        </div>
                    })}
                </div>
                <h2 className="indepth-title">Atomosphere</h2>
                <div className="indepth-atmosphere">
                    <p>{this.props.detail.atmosphere}</p>
                </div>
                <h2 className="indepth-title">Magnetosphere</h2>
                <div className="indepth-magnetosphere">
                    {this.props.detail.Magnetosphere.map((element, index)=>{
                            return <div>
                                <p>{element}</p>
                            </div>
                        })}
                </div>
                <h2 className="indepth-title">Moons</h2>
                <div className="indepth-moons">
                    {this.props.detail.moons.map((element, index)=>{
                            return <div>
                                <p>{element}</p>
                            </div>
                        })}
                </div>
                <h2 className="indepth-title">Potential for Life</h2>
                <div className="potential-for-life">
                    <p>{this.props.detail.Potential_for_life}</p>
                </div>

            </div>
        )
    }
}

export default InDepth