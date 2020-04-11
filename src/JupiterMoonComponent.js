import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class JupiterMoonComponent extends React.Component {
    state = {
        name:"Jupiter's Moon",
        description1:"Jupiter has 53 named moons. Others are awaiting official names. Combined, scientists now think Jupiter has 79 moons.",
        description2:"There are many interesting moons orbiting the planet, but the ones of most scientific interest are the first four moons discovered beyond Earth—the Galilean satellites.",
        image:[""],
        indepth_description:["The planet Jupiter's four largest moons are called the Galilean satellites after Italian astronomer Galileo Galilei, who first observed them in 1610. The German astronomer Simon Marius claimed to have seen the moons around the same time, but he did not publish his observations and so Galileo is given the credit for their discovery. These large moons, named Io, Europa, Ganymede, and Callisto, are each distinctive worlds.",
        "Io is the most volcanically active body in the solar system. Io's surface is covered by sulfur in different colorful forms. As Io travels in its slightly elliptical orbit, Jupiter's immense gravity causes tides in the solid surface that rise 300 feet (100 meters) high on Io, generating enough heat for volcanic activity and to drive off any water. Io's volcanoes are driven by hot silicate magma.",
        "Europa's surface is mostly water ice, and there is evidence that it may be covering an ocean of water or slushy ice beneath. Europa is thought to have twice as much water as does Earth. This moon intrigues astrobiologists because of its potential for having a habitable zone. Life forms have been found thriving near subterranean volcanoes on Earth and in other extreme locations that may be analogues to what may exist on Europa.",
        "Ganymede is the largest moon in the solar system (larger than the planet Mercury), and is the only moon known to have its own internally generated magnetic field.",
        "Callisto's surface is extremely heavily cratered and ancient—a visible record of events from the early history of the solar system. However, the very few small craters on Callisto indicate a small degree of current surface activity."],
        size_and_distance:[],
        orbit_and_rotation:[],
        structure:["The interiors of Io, Europa and Ganymede have a layered structure (as does Earth). Io has a core, and a mantle of at least partially molten rock, topped by a crust of solid rock coated with sulfur compounds. Europa and Ganymede both have a core; a rock envelope around the core; a thick, soft ice layer; and a thin crust of impure water ice. In the case of Europa, a global subsurface water layer probably lies just below the icy crust. Layering at Callisto is less well defined and appears to be mainly a mixture of ice and rock."],
        formation:[],
        indepth_description:[],
        kid_friendly:[],
        surface:[],
        Magnetosphere:[],
        moons:[],
        Potential_for_life:"",
        date_of_discovery:"",
        discovered_by:"",
        average_orbit_distance:"",
        mean_orbit_velocity:"",
        orbit_eccentricity:"",
        equatorial_inclination:"",
        equatorial_radius:"",
        equatorial_circumference:"1",
        volume:"",
        density:"",
        mass:"",
        surface_area:"",
        surface_gravity:"",
        escape_velocity:"",
        atomospheric_constituents:"",
        exploration:["Pioneers 10 and 11 (1973 to 1974) and Voyager 1 and Voyager 2 (1979) offered striking color views and global perspectives from their flybys of the Jupiter system. From 1995 to 2003, the Galileo spacecraft made observations from repeated elliptical orbits around Jupiter, passing as low as 162 miles (261 kilometers) over the surfaces of the Galilean moons. These close approaches resulted in images with unprecedented detail of selected portions of the surfaces.",
        "Close-up images taken by the Galileo spacecraft of portions of Europa's surface show places where ice has broken up and moved apart, and where liquid may have come from below and frozen smoothly on the surface. The low number of craters on Europa leads scientists to believe that a subsurface ocean has been present in recent geologic history and may still exist today. The heat needed to melt the ice in a place so far from the Sun is thought to come from inside Europa, resulting primarily from the same type of tidal forces that drive Io's volcanoes.",
        "The next major mission to explore Jupiter’s moons is NASA’s Europa Clipper. Clipper will conduct detailed reconnaissance of Jupiter's moon Europa to see whether the icy moon could harbor conditions suitable for life."],
        significant_events:[],
        galleries:[{image:"https://solarsystem.nasa.gov/internal_resources/431",
        title:"Io"},
        {image:"https://solarsystem.nasa.gov/internal_resources/430",
        title:"Europa"},
        {image:"https://solarsystem.nasa.gov/internal_resources/429",
        title:"Ganymede"},
        {image:"https://solarsystem.nasa.gov/internal_resources/428",
        title:"Callisto"},
    ],
    }

    render(){
        return(
        <div className="JupiterMoon">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://www.science.org.au/curious/sites/default/files/images/sebab9-galileo-family.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Jupiter's Moon
                <br></br>
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
            <MoreDestination detail = {this.state}></MoreDestination>
        </div>
        )}
}

export default JupiterMoonComponent;