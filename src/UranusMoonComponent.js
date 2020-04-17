import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class UranusMoonComponent extends React.Component {
    state = {
        name:"Uranus's Moon",
        description1:'“Sweet Moon," William Shakespeare wrote in "A Midsummer Night Dream," "I thank thee for thy sunny beams; I thank thee, Moon, for shining now so bright."',
        description2:"While most of the satellites orbiting other planets take their names from ancient mythologies, Uranus' moons are unique in being named for Shakespearean characters, along with a couple of the moons being named for characters from the works of Alexander Pope.",
        image:[""],
        indepth_description:["Oberon and Titania are the largest Uranian moons, and were first to be discovered—by William Herschel in 1787. William Lassell, who had been first to see a moon orbiting Neptune, discovered the next two, Ariel and Umbriel. Nearly a century passed before Gerard Kuiper found Miranda in 1948. And that was it until a NASA robot made it to distant Uranus.",
        "The Voyager 2 spacecraft visited the Uranian system in 1986 and tripled the number of known moons. Voyager 2 found an additional 10, just 26-154 km (16-96 miles) in diameter: Juliet, Puck, Cordelia, Ophelia, Bianca, Desdemona, Portia, Rosalind, Cressida and Belinda.",
        "Since then, astronomers using the Hubble Space Telescope and improved ground-based telescopes have raised the total to 27 known moons. Spotting the post-Voyager moons is an impressive feat. They're tiny—as little as 12-16 km (8-10 miles) across, and blacker than asphalt. And of course, they're about 2.9 billion km (1.8 billion miles) away from the Sun.",
        "All of Uranus's inner moons (those observed by Voyager 2) appear to be roughly half water ice and half rock. The composition of the moons outside the orbit of Oberon remains unknown, but they are likely captured asteroids."],
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
        exploration:[],
        significant_events:[],
        galleries:[{image:"https://solarsystem.nasa.gov/system/content_pages/main_images/220_PIA00041.jpg",
        title:"Ariel"},
        {image:"https://solarsystem.nasa.gov/system/content_pages/main_images/222_PIA01278-14001.jpg",
        title:"Belinda"},
        {image:"https://solarsystem.nasa.gov/system/content_pages/main_images/225_PIA01278-14001.jpg",
        title:"Bianca"},
        {image:"https://solarsystem.nasa.gov/system/content_pages/main_images/229_Caliban_br.gif",
        title:"Caliban"},
        {image:"https://solarsystem.nasa.gov/system/content_pages/main_images/232_Epsilon732.jpg",
        title:"Cordelia"},
        {image:"https://solarsystem.nasa.gov/system/content_pages/main_images/235_PIA01278-14001.jpg",
        title:"Cressida"},
        {image:"https://solarsystem.nasa.gov/system/content_pages/main_images/238_opo0533e.jpg",
        title:"Cupid"},
        {image:"https://solarsystem.nasa.gov/system/content_pages/main_images/241_PIA01278-14001.jpg",
        title:"Desdemona"}
    ]
    }

    render(){
        return(
        <div className="UranusMoon">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://live.staticflickr.com/885/26650997077_2f0da083bf_b.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Uranus's Moon
                <br></br>
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
            <MoreDestination detail = {this.state}></MoreDestination>
        </div>
        )}
}

export default UranusMoonComponent;